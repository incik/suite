import { useNode } from "@craftjs/core";
import { Text } from "./Text";

export const ProductCardHead = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

export const ProductCard = () => {
  return (
    <div className="w-1/3 bg-slate-300 rounded shadow-md">
      <ProductCardHead />
      <Text fontSize="20">ProductCard</Text>
    </div>
  );
};
