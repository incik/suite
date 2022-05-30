import { useNode } from "@craftjs/core";

export const ProductContainer = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      {children ? (
        children
      ) : (
        <div className="p-4 outline-1 outline-dashed outline-cyan-600">
          Empty product container. Drop some product components
        </div>
      )}
    </div>
  );
};
