import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import { Label } from "../ui/form/Label";
import { TextInput } from "../ui/form/TextInput";

export const Image = ({ src, alt, width, height }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  return (
    <img
      ref={(ref) => connect(drag(ref))}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

const ImageSettings = () => {
  const {
    actions: { setProp },
    src,
    alt,
    width,
    height,
  } = useNode((node) => ({
    src: node.data.props.src,
    alt: node.data.props.alt,
    width: node.data.props.width,
    height: node.data.props.height,
  }));

  return (
    <>
      <Label label="Source">
        <TextInput
          type="text"
          defaultValue={src}
          onChange={(e) => {
            setProp((props) => (props.src = e.target.value), 1000);
          }}
        />
      </Label>
      <Label label="Alt">
        <TextInput
          type="text"
          defaultValue={alt}
          onChange={(e) => {
            setProp((props) => (props.alt = e.target.value), 1000);
          }}
        />
      </Label>
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

export const ImageDefaultProps = {
  src: "http://placekitten.com/480/320",
  alt: "New image",
  width: 480,
  height: 320,
};

Image.craft = {
  props: ImageDefaultProps,
  related: {
    settings: ImageSettings,
  },
};
