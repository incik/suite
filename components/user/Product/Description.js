import { useContext } from "react";
import { useNode } from "@craftjs/core";
import { ProductContext } from "./ProductContext";
import { Label } from "../../ui/form/Label";
import { Select } from "../../ui/form/Select";
import { ProductContainer } from "./Container";

export const ProductDescription = ({ type, fontWeight, fontSize }) => {
  const {
    connectors: { connect },
  } = useNode();

  const productData = useContext(ProductContext);

  return (
    <div
      ref={connect}
      dangerouslySetInnerHTML={{
        __html:
          type === "short"
            ? productData.data.product.shortDescription
            : productData.data.product.description,
      }}
      className={`font-${fontWeight} text-${fontSize}`}
    />
  );
};

const ProductDescriptionSettings = () => {
  const {
    actions: { setProp },
    type,
    fontSize,
    fontWeight,
  } = useNode((node) => ({
    type: node.data.props.type,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
  }));
  return (
    <>
      <Label label="Description type">
        <Select
          defaultValue={type}
          onChange={(e) =>
            setProp((props) => (props.type = e.target.value), 1000)
          }
        >
          <option value="short">Short</option>
          <option value="full">Full</option>
        </Select>
      </Label>
      <Label label="Font size">
        <Select
          defaultValue={fontSize}
          onChange={(e) =>
            setProp((props) => (props.fontSize = e.target.value), 1000)
          }
        >
          <option value="xs">XS</option>
          <option value="sm">S</option>
          <option value="base">M</option>
          <option value="lg">L</option>
          <option value="xl">XL</option>
          <option value="2xl">XXL</option>
        </Select>
      </Label>
      <Label label="Font weight">
        <Select
          defaultValue={fontWeight}
          onChange={(e) =>
            setProp((props) => (props.fontWeight = e.target.value), 1000)
          }
        >
          <option value="light">light</option>
          <option value="normal">normal</option>
          <option value="medium">medium</option>
          <option value="semibold">semibold</option>
          <option value="bold">bold</option>
        </Select>
      </Label>
    </>
  );
};

const ProductDescriptionDefaultProps = {
  fontSize: "base",
  fontWeight: "normal",
  type: "short",
};

ProductDescription.craft = {
  props: ProductDescriptionDefaultProps,
  related: { settings: ProductDescriptionSettings },
  rules: {
    canDrop: (dropTarget, _, helper) => {
      const targetNode = helper(dropTarget.id);
      const hasAncestorContainer = targetNode
        .ancestors(true)
        .map((nodeId) => helper(nodeId).get().data.type === ProductContainer);

      return hasAncestorContainer.reduce((a, b) => a || b, false);
    },
  },
};
