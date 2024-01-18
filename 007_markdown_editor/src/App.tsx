import { useState, useRef } from "react";

import Header from "./components/Header.tsx";
import Editor from "./components/Editor.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Modal from "./components/UI/Modal.tsx";

import { useAppSelector } from "./store/hooks.ts";
import { RootState } from "./store/index.ts";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  /* Turn on or off the sidebar */
  const sideBarOn = useAppSelector(
    (state: RootState) => state.interface.sidebarOn,
  );

  /* Switch theme between light | dark */
  const currTheme = useAppSelector((state: RootState) => state.interface.theme);
  if (currTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  /* The ref references the markdown editor textarea */
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <div className="flex h-dvh w-dvh min-w-[960px]">
        {sideBarOn && <Sidebar />}
        <div className="flex flex-col flex-1">
          <Header textAreaRef={textAreaRef} setModalOpen={setModalOpen} />
          <Editor textAreaRef={textAreaRef} />
        </div>
      </div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default App;
