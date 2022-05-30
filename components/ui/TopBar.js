import { useEditor } from "@craftjs/core";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowUpIcon,
  SaveIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { Panel } from "./Panel";
import { Popup } from "./Popup";

const template1 = require("../../data/template1.json");

const EditButton = ({}) => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <button
      className={`text-white ${
        enabled
          ? "bg-green-700 hover:bg-green-800"
          : "bg-blue-700 hover:bg-blue-800"
      } focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-2 py-1 mr-2 mb-2`}
      onClick={() =>
        actions.setOptions((options) => (options.enabled = !enabled))
      }
    >
      {enabled ? (
        <>
          <CheckIcon className="w-5 h-5 inline-block mr-2" />
          Finish
        </>
      ) : (
        <>
          <PencilIcon className="w-5 h-5 inline-block mr-2" />
          Edit
        </>
      )}
    </button>
  );
};

const TopBarButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`focus:outline-none text-white focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-xs px-2.5 py-1 mr-2 mb-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const TopBar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const { actions, canUndo, canRedo, query } = useEditor((_, query) => ({
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  return (
    <Panel className="mb-2 pt-2 pb-0 flex">
      <div className="w-1/2 fill">
        <TopBarButton
          disabled={!canUndo}
          onClick={() => actions.history.undo()}
          className={`bg-gray-200 ${
            canUndo ? "text-gray-900" : "text-gray-400"
          }`}
        >
          <ArrowCircleLeftIcon className="w-5 h-5 inline-block mr-2" />
          Undo
        </TopBarButton>
        <TopBarButton
          disabled={!canRedo}
          onClick={() => actions.history.redo()}
          className={`bg-gray-200 ${
            canRedo ? "text-gray-900" : "text-gray-400"
          }`}
        >
          <ArrowCircleRightIcon className="w-5 h-5 inline-block mr-2" />
          Redo
        </TopBarButton>
        <TopBarButton
          onClick={() => setShowPopup(true)}
          className="text-white bg-sky-700 hover:bg-sky-800"
        >
          <SaveIcon className="w-4 h-4 inline-block mr-2" />
          Export
        </TopBarButton>

        <TopBarButton
          onClick={() => actions.deserialize(template1)}
          className="bg-amber-300 text-gray-900"
        >
          <ArrowUpIcon className="w-4 h-4 inline-block mr-2" />
          Load template
        </TopBarButton>
      </div>
      <div className="w-1/2 fill text-right">
        <EditButton />
      </div>

      {showPopup && <Popup setter={setShowPopup} query={query} />}
    </Panel>
  );
};
