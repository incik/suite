import { useNode } from "@craftjs/core";
import { Label } from "../ui/form/Label";
import { TextInput } from "../ui/form/TextInput";

export const Button = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      ref={(ref) => connect(drag(ref))}
    >
      {text}
    </button>
  );
};

const ButtonSettings = () => {
  const {
    actions: { setProp },
    text,
  } = useNode((node) => ({
    text: node.data.props.text,
  }));
  return (
    <>
      <Label label="Text">
        <TextInput
          defaultValue={text}
          onChange={(e) => {
            setProp((props) => (props.text = e.target.value), 1000);
          }}
        />
      </Label>
    </>
  );
};

export const ButtonDefaultProps = {
  text: "New Button",
};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
