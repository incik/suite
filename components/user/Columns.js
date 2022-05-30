import React, { useState, useEffect } from "react";

import { Element, useNode, useEditor } from "@craftjs/core";
import { Container } from "./Container";
import { Label } from "../ui/form/Label";
import { TextInput } from "../ui/form/TextInput";

const EmptyColumn = () => {
  return (
    <div className="m-1 p-4 italic text-gray-600 bg-teal-100">Empty column</div>
  );
};

export const ColumnContent = ({ children, className, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div {...props} ref={connect} className={`w-full ${className}`}>
      {children ? <React.Fragment>{children}</React.Fragment> : <EmptyColumn />}
    </div>
  );
};

export const Columns = ({ numberOfCols, gap, children }) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <Container
      className={`flex flex-row outline-dashed outline-1 gap-${gap} outline-teal-300 ${
        enabled && "hover:border-t-8 border-t-sky-500"
      } `}
    >
      {[...Array(numberOfCols).keys()].map((id) => (
        <Element
          is={ColumnContent}
          id={`column-${id}`}
          canvas
          className={`col-span-${Math.floor(10 / numberOfCols)}`}
        />
      ))}
    </Container>
  );
};

const ColumnsSettings = () => {
  const {
    actions: { setProp },
    numberOfCols,
    gap,
  } = useNode((node) => ({
    numberOfCols: node.data.props.numberOfCols,
    gap: node.data.props.gap,
  }));
  return (
    <>
      <Label label="Number of columns">
        <TextInput
          type="number"
          defaultValue={numberOfCols}
          step={1}
          min={1}
          max={10}
          onChange={(e) => {
            setProp(
              (props) => (props.numberOfCols = parseInt(e.target.value, 10)),
              1000
            );
          }}
        />
      </Label>
      <Label label="Gap">
        <TextInput
          type="number"
          defaultValue={gap}
          step={1}
          min={0}
          max={10}
          onChange={(e) => {
            setProp(
              (props) => (props.gap = parseInt(e.target.value, 10)),
              1000
            );
          }}
        />
      </Label>
    </>
  );
};

export const ColumnsDefaultProps = {
  numberOfCols: 2,
  gap: 0,
};

Columns.craft = {
  props: ColumnsDefaultProps,
  related: {
    settings: ColumnsSettings,
  },
};
