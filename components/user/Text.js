import { useNode } from "@craftjs/core";
import React from "react";

export const Text = ({ text, fontSize, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <p style={{ fontSize }}>{text || children}</p>
    </div>
  );
};

Text.craft = {};
