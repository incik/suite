import { Element, useNode } from "@craftjs/core";
import { Container } from "./Container";
import { Row } from "./Row";

export const ColumnContent = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div {...props} ref={connect} className="flex flex-row">
      {children ? (
        children
      ) : (
        <div className="p-4  italic text-gray-600 bg-teal-100">
          Empty column
        </div>
      )}
    </div>
  );
};

ColumnContent.craft = {
  rules: {
    /* canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) =>
        [Row, Column].includes(incomingNode.data.type)
      ), */
  },
};

export const Column = ({ children }) => {
  return (
    <Container className="flex flex-row grow outline-dashed outline-1 outline-teal-300">
      <Element is={ColumnContent} id="columncontent" canvas />
    </Container>
  );
};
