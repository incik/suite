import { Element, useEditor, useNode } from "@craftjs/core";
import { ProductContext } from "./ProductContext";

const productData = require("../../../data/product.json");

export const ProductContainerContent = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div
      {...props}
      ref={connect}
      className={`p-4 outline-1 outline-dashed outline-cyan-600 ${
        enabled && "py-8"
      }`}
    >
      {children ? (
        children
      ) : (
        <p>Empty product container. Drop some product components</p>
      )}{" "}
    </div>
  );
};

export const ProductContainer = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <ProductContext.Provider value={productData}>
        {children ?? (
          <Element
            is={ProductContainerContent}
            id="product-container-placeholder"
            canvas
          />
        )}
      </ProductContext.Provider>
    </div>
  );
};
