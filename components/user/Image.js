import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";

export const Image = ({ src, alt, width, height }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <img
      ref={(ref) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
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
      <label>
        Source
        <input
          type="text"
          defaultValue={src}
          onChange={(e) => {
            setProp((props) => (props.src = e.target.value), 1000);
          }}
        />
      </label>
      <label>
        Alt
        <input
          type="text"
          defaultValue={alt}
          onChange={(e) => {
            setProp((props) => (props.alt = e.target.value), 1000);
          }}
        />
      </label>
      <label>
        Width
        <input
          type="number"
          defaultValue={width}
          min="1"
          onChange={(e) => {
            setProp((props) => (props.width = e.target.value), 1000);
          }}
        />
      </label>
      <label>
        Height
        <input
          type="number"
          defaultValue={height}
          min="1"
          onChange={(e) => {
            setProp((props) => (props.height = e.target.value), 1000);
          }}
        />
      </label>
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
