import { useNode } from "@craftjs/core";
import React, { useEffect, useState } from "react";
import { Text } from "./Text";

const product = require("../../data/product.json");

export const ProductCardHead = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

export const ProductCard = () => {
  console.log(product);

  return (
    <div className="w-1/3 bg-slate-300 rounded shadow-md">
      <ProductCardHead />
      <Text fontSize="20" text="Product description" />
    </div>
  );
};
