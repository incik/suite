import { useContext } from "react";
import { useNode } from "@craftjs/core";
import { ProductContext } from "./ProductContext";
import { Text } from "../Text";
import { Label } from "../../ui/form/Label";
import { Select } from "../../ui/form/Select";
import { ProductContainer } from "./Container";

export const ProductTitle = ({ fontSize, fontWeight }) => {
  const {
    connectors: { connect },
  } = useNode();

  const productData = useContext(ProductContext);

  return (
    <Text
      ref={connect}
      text={productData.data.product.name}
      userEditable={false}
      className={`font-${fontWeight} text-${fontSize}`}
    />
  );
};

const ProductTitleSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    fontWeight,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
  }));
  return (
    <>
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

const ProductTitleDefaultProps = {
  fontSize: "base",
  fontWeight: "semibold",
};

ProductTitle.craft = {
  props: ProductTitleDefaultProps,
  related: {
    settings: ProductTitleSettings,
  },
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
