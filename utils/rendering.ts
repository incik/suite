// https://codesandbox.io/s/wizardly-sunset-4pk02t?file=/src/utils.tsx:3093-3109

import {
  SerializedNode,
  SerializedNodes,
  NodeId,
  Resolver,
} from "@craftjs/core";
import { Text } from "./Text";
import _ from "lodash";
import React from "react";
import ReactDOMServer from "react-dom/server";

export interface BaseNodeProps {
  id?: NodeId;
  isSSR?: boolean;
}

export type SerializedNodeWithId = SerializedNode & { id: string };

const RESOLVERS: Resolver = {
  Text,
};

export const getNodeById = (nodes: SerializedNodeWithId[], id: NodeId) => {
  return _.find(nodes, (node) => node.id === id);
};

const deserializeNodes = (
  nodes: SerializedNodes,
  id: NodeId = "ROOT",
  sorted: SerializedNodeWithId[] = []
): SerializedNodeWithId[] => {
  const node = nodes[id];
  if (!node) {
    throw new Error(`Could not find node ${id}`);
  }

  sorted.push({ id, ...node });

  _.each(node.nodes, (n) => {
    sorted.push(...deserializeNodes(nodes, n));
  });

  return sorted;
};

export function getDescendants(
  nodes: SerializedNodeWithId[],
  id: NodeId,
  deep = false,
  includeOnly?: "linkedNodes" | "childNodes"
): SerializedNodeWithId[] {
  function appendChildNode(
    id: NodeId,
    descendants: NodeId[] = [],
    depth: number = 0
  ) {
    if (deep || (!deep && depth === 0)) {
      const node = getNodeById(nodes, id);

      if (!node) {
        return descendants;
      }

      if (includeOnly !== "childNodes") {
        // Include linkedNodes if any
        const linkedNodes = node.linkedNodes;

        _.each(linkedNodes, (nodeId) => {
          descendants.push(nodeId);
          descendants = appendChildNode(nodeId, descendants, depth + 1);
        });
      }

      if (includeOnly !== "linkedNodes") {
        const childNodes = node.nodes;

        _.each(childNodes, (nodeId) => {
          descendants.push(nodeId);
          descendants = appendChildNode(nodeId, descendants, depth + 1);
        });
      }

      return descendants;
    }
    return descendants;
  }
  return _.compact(
    _.map(appendChildNode(id), (nid) => getNodeById(nodes, nid))
  );
}

export const renderNode = (
  nodes: SerializedNodeWithId[],
  resolver: Resolver,
  nodeId: NodeId
): React.ReactElement => {
  const node = getNodeById(nodes, nodeId);

  if (!node) {
    throw new Error(`Could not find node with id ${nodeId}`);
  }

  const resolvedComponent = _.get(resolver, (node.type as any).resolvedName);
  const descendants = getDescendants(nodes, nodeId);
  const children = _.map(descendants, (descendant) =>
    renderNode(nodes, resolver, descendant.id)
  );

  return React.createElement(
    resolvedComponent,
    { ...node.props, isSSR: true, id: nodeId },
    children
  );
};

const renderNodesToJSX = (
  nodes: SerializedNodeWithId[],
  resolver: Resolver,
  nodeId: NodeId
): React.ReactElement => {
  return renderNode(nodes, resolver, nodeId);
};

export const generateHtml = (craftJsNodes: SerializedNodes) => {
  const nodes = deserializeNodes(craftJsNodes);
  const jsx = renderNodesToJSX(nodes, RESOLVERS, "ROOT");
  const body = ReactDOMServer.renderToString(jsx);
  const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charSet="UTF-8" />
        </head>
        <body>
          ${body}
        </body>
      </html>
    `;

  return html;
};
