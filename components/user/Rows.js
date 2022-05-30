import { Element, useNode } from "@craftjs/core";
import { Container } from "./Container";

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

export const Rows = ({ numberOfRows = 2, children }) => {
  return (
    <Container className=" outline-dashed outline-1 outline-green-600">
      {[...Array(numberOfRows).keys()].map((id) => (
        <Element is={RowContent} id={`row-${id}`} canvas />
      ))}
    </Container>
  );
};
