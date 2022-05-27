import { Element, useNode } from "@craftjs/core";
import { Container } from "./Container";
import { Column } from "./Column";

export const RowContent = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div {...props} ref={connect} className="flex flex-col">
      {children ? (
        children
      ) : (
        <div className="p-4 italic text-gray-600 bg-green-300">Empty row</div>
      )}
    </div>
  );
};

RowContent.craft = {
  rules: {
    /* canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) =>
        [Row, Column].includes(incomingNode.data.type)
      ), */
  },
};

export const Row = ({ children }) => {
  return (
    <Container className=" outline-dashed outline-1 outline-green-600">
      <Element is={RowContent} id="rowcontent" canvas />
    </Container>
  );
};
