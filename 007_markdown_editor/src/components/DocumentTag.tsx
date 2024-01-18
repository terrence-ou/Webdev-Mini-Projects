import { useState, useRef } from "react";

import { RootState } from "../store/index.ts";
import { useAppSelector, useAppDispatch } from "../store/hooks.ts";
import { markdownDataActions } from "../store/markdownData.ts";

import logoIcon from "../assets/icons/logo.svg";
import fileIcon from "../assets/icons/icon-document.svg";

const DocumentTag = () => {
  const dispatch = useAppDispatch();

  /* Reference of input which is used to change the current filename */
  const inputRef = useRef<HTMLInputElement>(null);

  const [editingFilename, setEditingFilename] = useState<boolean>(false);
  const currFile = useAppSelector((state: RootState) => state.data.currFile);

  /* Switch to filename-changing state */
  const onClick = () => {
    setEditingFilename(true);
  };

  /* Confirming changes */
  const onConfirmChange = () => {
    setEditingFilename(false);
    const newName = inputRef.current?.value;
    if (!inputRef.current?.validity.valid || !newName || newName.length === 0)
      return;
    if (newName.slice(newName.length - 3, newName.length) === ".md") {
      dispatch(markdownDataActions.changeFilename(newName));
    } else {
      dispatch(markdownDataActions.changeFilename(newName + ".md"));
    }
  };

  return (
    <section className="flex">
      <img className="h-3 my-auto ml-2 mr-8" src={logoIcon} alt="logo icon" />
      <div className="flex justify-between gap-4 my-auto pl-6 border-l border-gray-500">
        <img className="w-4 my-auto" src={fileIcon} alt="file icon" />
        <div className="my-auto">
          <p className="font-light text-gray-500 text-header-sm">
            Document Name
          </p>
          {editingFilename ? (
            <>
              <input
                ref={inputRef}
                className="bg-gray-800 border-b text-header-lg"
                type="text"
                pattern="^[A-Za-z0-9\-]*\.?[A-Za-z0-9\-]*$"
                defaultValue={currFile}
                onBlur={onConfirmChange}
              />
              <button
                onClick={onConfirmChange}
                className="ml-4 text-header-sm bg-orange-dark hover:bg-orange-light px-1 py-0 rounded-[4px]"
              >
                confirm
              </button>
            </>
          ) : (
            <button className="text-header-lg" onClick={onClick}>
              {currFile}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentTag;
