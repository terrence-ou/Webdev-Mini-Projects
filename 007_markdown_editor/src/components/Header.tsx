import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { interfaceActions } from "../store/interface.ts";
import { markdownDataActions } from "../store/markdownData.ts";
import { RootState } from "../store/index.ts";

import { TrasnIcon } from "./UI/icons.tsx";
import { MainButton } from "./UI/icons.tsx";
import DocumentTag from "./DocumentTag.tsx";

import menuIcon from "../assets/icons/icon-menu.svg";
import saveIcon from "../assets/icons/icon-save.svg";
import crossIcon from "../assets/icons/icon-close.svg";

type HeaderProps = {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ textAreaRef, setModalOpen }: HeaderProps) => {
  /* Handling save button text */
  const [saveButtonText, setSaveButtonText] = useState<
    "Save Changes" | "Saved!"
  >("Save Changes");

  useEffect(() => {
    if (saveButtonText === "Saved!") {
      const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
        setSaveButtonText("Save Changes");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [saveButtonText]);

  /* Truning the sidebar on or off */
  const sidebarOn = useAppSelector(
    (state: RootState) => state.interface.sidebarOn,
  );
  const dispatch = useAppDispatch();
  const onSwitchSidebar = () => {
    dispatch(interfaceActions.switchSideBar());
  };

  /* Functionalities for saving the current file */
  const onSaveChanges = () => {
    dispatch(markdownDataActions.saveFile(textAreaRef.current?.value));
    setSaveButtonText("Saved!");
  };

  /* Displaying delet confirmation modal */
  const onDeleteFile = () => {
    setModalOpen(true);
  };

  return (
    <header className="flex h-header-height w-full bg-gray-800 text-gray-200">
      {/*Sidebar switch*/}
      <button className="w-20 bg-gray-700" onClick={onSwitchSidebar}>
        <img
          className="m-auto"
          src={sidebarOn ? crossIcon : menuIcon}
          alt="menu icon"
        />
      </button>
      <div className="flex flex-1 box-border w-full justify-between p-4">
        {/*Logo and Document name*/}
        <DocumentTag />
        {/*Delete and save buttons*/}
        <section className="flex gap-6">
          <button onClick={onDeleteFile}>
            <TrasnIcon />
          </button>
          <MainButton onClick={onSaveChanges}>
            <img src={saveIcon} alt="save icon" className="my-auto" />
            {saveButtonText}
          </MainButton>
        </section>
      </div>
    </header>
  );
};

export default Header;
