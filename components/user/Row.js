import { useNode } from "@craftjs/core";
import { Container } from "./Container";
import { Text } from "./Text";

const RowContent = ({ children }) => {
  return <div>{children}</div>;
};

export const CardTop = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      {...props}
      ref={connect}
      className="text-only"
      style={{
        padding: "10px",
        marginBottom: "10px",
        borderBottom: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const Row = ({ children }) => {
  return (
    <Container className="bg-blue-600 p-4 mb-1">
      <Element id="content" is={CardTop} canvas>
        <Text text="Karel" />
      </Element>
    </Container>
  );
};
