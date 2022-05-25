import { useNode } from "@craftjs/core";
import { Button as MaterialButton, Color } from "@material-ui/core";

export type ButtonProps = {
  size?: string;
  variant?: string;
  color?: Color;
  children?: React.ReactNode;
};

export const Button = ({ size, variant, color, children }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialButton
      ref={(ref: any) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  );
};
