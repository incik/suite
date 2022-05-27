import { useNode } from "@craftjs/core";
import React from "react";

export const Container = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      className="p-4 outline-1 outline-dashed outline-red-700"
      {...props}
      ref={(ref) => connect(drag(ref))}
    >
      {children}
    </div>
  );
};
