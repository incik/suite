import { useNode } from "@craftjs/core";

export const Button = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <button ref={(ref) => connect(drag(ref))}>{text}</button>;
};
