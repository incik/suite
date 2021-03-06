import { useNode } from "@craftjs/core";
import React from "react";

export const Container = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div className="" {...props} ref={(ref) => connect(drag(ref))}>
      {children ? (
        children
      ) : (
        <div className="text-center italic p-4 bg-yellow-100 outline-1 outline-dashed outline-amber-400">
          Empty container
        </div>
      )}
    </div>
  );
};
