import { useNode } from "@craftjs/core";

export const Link = ({ text, href, external }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <a
      className="text-indigo-700 hover:underline"
      href={href}
      ref={(ref) => connect(drag(ref))}
    >
      {text}
    </a>
  );
};
