import { Button as MaterialButton, Color } from "@material-ui/core";

export type ButtonProps = {
  size?: string;
  variant?: string;
  color?: Color;
  children?: React.ReactNode;
};

export const Button = ({ size, variant, color, children }: any) => {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  );
};
