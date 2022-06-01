import { useContext } from "react";
import { useNode } from "@craftjs/core";
import { ProductContext } from "./ProductContext";
import { Image } from "../Image";
import { Label } from "../../ui/form/Label";
import { TextInput } from "../../ui/form/TextInput";
import { ProductContainer } from "./Container";

export const ProductImage = ({ width, height }) => {
  const {
    connectors: { connect },
  } = useNode();

  const productData = useContext(ProductContext);

  return (
    <Image
      ref={connect}
      width={width}
      height={height}
      src={`https://cdn.myshoptet.com/usr/fenix.myshoptet.com/user/shop/big/58-1_baleriny-modre-s-puntiky--velikost-42.jpg?59393c3a`}
    />
  );
};

const ProductImageSetttings = () => {
  const {
    actions: { setProp },
    width,
    height,
  } = useNode((node) => ({
    width: node.data.props.width,
    height: node.data.props.height,
  }));

  return (
    <>
      <Label label="Width">
        <TextInput
          type="number"
          defaultValue={width}
          min="1"
          onChange={(e) => {
            setProp((props) => (props.width = e.target.value), 1000);
          }}
        />
      </Label>
      <Label label="Height">
        <TextInput
          type="number"
          defaultValue={height}
          min="1"
          onChange={(e) => {
            setProp((props) => (props.height = e.target.value), 1000);
          }}
        />
      </Label>
    </>
  );
};

export const ProductImageDefaultProps = {
  width: 480,
  height: 320,
};

ProductImage.craft = {
  props: ProductImageDefaultProps,
  related: {
    settings: ProductImageSetttings,
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
