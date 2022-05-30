import { Editor } from "@craftjs/core";

import * as UserComponents from "../components/user";

export default function Preview() {
  return (
    <div>
      <Editor resolver={UserComponents}>
        <Frame></Frame>
      </Editor>
    </div>
  );
}
