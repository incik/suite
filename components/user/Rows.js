import { Element, useNode, useEditor } from "@craftjs/core";
import { Container } from "./Container";
import { Label } from "../ui/form/Label";
import { TextInput } from "../ui/form/TextInput";

export const RowContent = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div {...props} ref={connect} className="flex flex-col">
      {children ? (
        children
      ) : (
        <div className={`m-1 p-4 italic text-gray-600 bg-green-300`}>
          Empty row
        </div>
      )}
    </div>
  );
};

export const Rows = ({ numberOfRows = 2, gap, children }) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <Container
      className={`outline-dashed outline-1 outline-green-600 gap-${gap} ${
        enabled && "hover:border-t-8 border-t-sky-500"
      }`}
    >
      {[...Array(numberOfRows).keys()].map((id) => (
        <Element is={RowContent} id={`row-${id}`} canvas />
      ))}
    </Container>
  );
};

const RowsSettings = () => {
  const {
    actions: { setProp },
    numberOfRows,
    gap,
  } = useNode((node) => ({
    numberOfRows: node.data.props.numberOfRows,
    gap: node.data.props.gap,
  }));
  return (
    <>
      <Label label="Number of Rows">
        <TextInput
          type="number"
          defaultValue={numberOfRows}
          step={1}
          min={1}
          max={10}
          onChange={(e) => {
            setProp(
              (props) => (props.numberOfRows = parseInt(e.target.value, 10)),
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

export const RowsDefaultProps = {
  numberOfRows: 2,
  gap: 0,
};

Rows.craft = {
  props: RowsDefaultProps,
  related: {
    settings: RowsSettings,
  },
};
