import { useState } from "react";
import { useEditor } from "@craftjs/core";
import { RefreshIcon } from "@heroicons/react/outline";
import { Panel } from "./Panel";

const __transformChildren = (children, getNode, level) =>
  children
    .map((child) => transformToJSX(getNode(child).get(), getNode, level + 1))
    .join("\n");

const transformToJSX = (node, getNode, level = 1) => {
  if (!node) return null;

  const props = Object.keys(node.data.props)
    .map((prop) =>
      prop !== "children" ? `${prop}="${node.data.props[prop]}"` : ""
    )
    .join(" ");

  const linkedNodes = Object.keys(node.data.linkedNodes).map(
    (linkedNode) => node.data.linkedNodes[linkedNode]
  );

  const children = node.data.nodes.length > 0 ? node.data.nodes : linkedNodes;

  const tabs =
    level > 1
      ? Array.from(Array(level - 1).keys())
          .map(() => "  ")
          .join("")
      : "";

  return `${tabs}<${node.data.name}${props ? " " + props : ""}${
    children.length > 0
      ? `>\n${__transformChildren(children, getNode, level + 1)}\n${tabs}</${
          node.data.name
        }>`
      : " />"
  }`;
};

export const JsxOutput = () => {
  const { query } = useEditor();
  const [q, setQ] = useState();
  const [output, setOutput] = useState();

  return (
    <Panel>
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">JSX Preview</h2>
        <button
          className="px-4 py-2 bg-amber-500 text-white border rounded shadow-md"
          onClick={() => {
            const nodes = query.getNodes();
            const rootNode = nodes["ROOT"];

            setQ(rootNode);
            setOutput(query.serialize());
          }}
        >
          <RefreshIcon className="w-5" />
        </button>
      </div>
      <div className="mt-4 p-4 border rounded bg-white">
        <pre>{transformToJSX(q, query.node)}</pre>
      </div>
      <div className="mt-4 p-4 border rounded bg-gray-200 text-gray-400">
        {output}
      </div>
    </Panel>
  );
};
