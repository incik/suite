export type TextProps = {
  text: string;
  fontSize?: string;
};

export const Text = ({ text, fontSize }: TextProps) => {
  return (
    <div>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};
