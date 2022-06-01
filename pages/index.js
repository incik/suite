import { useState } from "react";
import { Editor, Element, Frame, useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";

import * as UserComponents from "../components/user";

import { Toolbox } from "../components/ui/Toolbox";
import { Panel } from "../components/ui/Panel";
import { SettingsPanel } from "../components/ui/SettingsPanel";
import { TopBar } from "../components/ui/TopBar";
import { JsxOutput } from "../components/ui/JsxOutput";

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
        <Editor resolver={UserComponents}>
          <div className="col-span-2">
            <Toolbox />
          </div>
          <div className="col-span-8">
            <TopBar />
            <Panel>
              <Frame>
                <Element is={UserComponents.Container} id="root" canvas />
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
          <div className="col-span-12">
            <JsxOutput />
          </div>
        </Editor>
      </div>
      <div className="bg-green-600 text-white absolute bottom-0 w-full px-4 py-1 text-right text-xs">
        WIP - 0.0.1
      </div>
    </div>
  );
}
