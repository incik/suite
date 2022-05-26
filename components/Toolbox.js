import { useEditor } from "@craftjs/core";
import {
  CubeIcon,
  MenuAlt4Icon,
  ViewBoardsIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { Card } from "./user/Card";
import { ProductCard } from "./user/ProductCard";
import { Row } from "./user/Row";
import { Text } from "./user/Text";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <div className="p-4">
      <h2 className="text-white mb-4">Basics</h2>
      <div
        className="flex flex-col shadow-md rounded items-center p-2 bg-slate-400 mb-4"
        ref={(ref) => connectors.create(ref, <Text text="New text" />)}
      >
        <PencilIcon className="text-white w-5 h-5" />
        <span className="text-white">Text</span>
      </div>

      <h2 className="text-white mb-4">Layout</h2>

      <div
        className="flex flex-col shadow-md rounded items-center p-2 bg-slate-400 mb-4"
        ref={(ref) => connectors.create(ref, <Card />)}
      >
        <MenuAlt4Icon className="text-white w-5 h-5" />
        <span className="text-white">Card</span>
      </div>

      <div
        className="flex flex-col shadow-md rounded items-center p-2 bg-slate-400 mb-4"
        ref={(ref) => connectors.create(ref, <Row />)}
      >
        <MenuAlt4Icon className="text-white w-5 h-5" />
        <span className="text-white">Row</span>
      </div>

      <div
        className="flex flex-col shadow-md rounded items-center p-2 bg-slate-400 mb-4"
        ref={(ref) => connectors.create(ref, <ProductCard />)}
      >
        <ViewBoardsIcon className="text-white w-5 h-5" />
        <span className="text-white">Column</span>
      </div>

      <h2 className="text-white mb-4">Customs</h2>
      <div
        className="flex flex-col shadow-md rounded items-center p-2 bg-slate-400 mb-4"
        ref={(ref) => connectors.create(ref, <ProductCard />)}
      >
        <CubeIcon className="text-white w-5 h-5" />
        <span className="text-white">ProductCard</span>
      </div>
    </div>
  );
};
