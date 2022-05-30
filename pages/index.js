import { useState } from "react";
import { Editor, Element, Frame, useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";

import { Button } from "../components/user/Button";
import { Card, CardBottom, CardTop } from "../components/user/Card";
import { Columns, ColumnContent } from "../components/user/Columns";
import { Rows, RowContent } from "../components/user/Rows";
import { Text } from "../components/user/Text";
import { Link } from "../components/user/Link";
import { ProductCard } from "../components/user/ProductCard";
import { Container } from "../components/user/Container";
import { Image } from "../components/user/Image";

// import * as UserComponents from "../components/user";

import { Toolbox } from "../components/ui/Toolbox";
import { Panel } from "../components/ui/Panel";
import { SettingsPanel } from "../components/ui/SettingsPanel";
import { TopBar } from "../components/ui/TopBar";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-sky-600 text-white border-t-2 border-amber-500">
        <div className="flex pt-1 pb-3 px-4 items-end">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-semibold italic">
              suite<span className="text-red-500">_</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 h-full p-1">
        <Editor
          // resolver={UserComponents}
          resolver={{
            Button,
            Rows,
            Text,
            Container,
            ProductCard,
            Card,
            CardTop,
            CardBottom,
            RowContent,
            Columns,
            ColumnContent,
            Link,
            Image,
          }}
        >
          <div className="col-span-2">
            <Toolbox />
          </div>
          <div className="col-span-8">
            <TopBar />
            <Panel>
              <Frame>
                {/* <Element is={UserComponents.Container} id="root" canvas /> */}
                <Element is={Container} id="root" canvas />
              </Frame>
            </Panel>
          </div>
          <div className="flex flex-col col-span-2">
            <div className="grow">
              <SettingsPanel />
            </div>
            <div className="grow">
              <Layers />
            </div>
          </div>
        </Editor>
      </div>
      <div className="bg-green-600 text-white absolute bottom-0 w-full px-4 py-1 text-right text-xs">
        WIP - 0.0.1
      </div>
    </div>
  );
}
