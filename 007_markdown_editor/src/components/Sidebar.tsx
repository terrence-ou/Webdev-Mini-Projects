import { useAppSelector, useAppDispatch } from "../store/hooks.ts";
import { interfaceActions } from "../store/interface.ts";
import { markdownDataActions } from "../store/markdownData.ts";
import { File } from "../store/markdownData.ts";
import { RootState } from "../store/index.ts";

import ThemeSwitch from "./UI/ThemeSwitch.tsx";
import { MainButton } from "./UI/icons.tsx";

import fileIcon from "../assets/icons/icon-document.svg";

const Sidebar = () => {
  /* Functions helping switch the theme */
  const dispatch = useAppDispatch();
  const currTheme = useAppSelector((state: RootState) => state.interface.theme);
  const files = useAppSelector((state: RootState) => state.data.files);

  const onChooseFile = (filename: string) => {
    dispatch(markdownDataActions.setCurrFile(filename));
  };

  const onCreateFile = () => {
    dispatch(markdownDataActions.createFile());
  };

  /* Getting a list of files, and display them on the sidebar */
  const getFiles = (file: File) => {
    const key: string = Math.random().toFixed(6);
    const createDate: string = new Date(file.createdAt).toLocaleString(
      "en-us",
      { year: "numeric", month: "short", day: "2-digit" },
    );
    return (
      <button
        key={key}
        onClick={() => onChooseFile(file.name)}
        className="flex mt-6 text-white hover:text-orange-dark"
      >
        <img className="w-4 mr-4 my-auto" src={fileIcon} alt="file icon" />
        <span className="flex flex-col text-start">
          <p className="text-header-sm text-gray-500">{createDate}</p>
          <h2 className="text-header-lg">{file.name}</h2>
        </span>
      </button>
    );
  };

  return (
    <aside className="relative flex flex-col w-[250px] bg-gray-800 p-6">
      <h1 className="font-bold text-header-md text-gray-500 tracking-header-space mb-7">
        MY DOCUMENTS
      </h1>
      <MainButton onClick={onCreateFile}>+ New Document</MainButton>
      <section className="flex-1">
        {/* Displaying the files in reversed order */}
        {files
          .slice(0)
          .reverse()
          .map((file: File) => getFiles(file))}
      </section>
      <ThemeSwitch
        switchOn={currTheme === "dark"}
        setSwitchOn={() => dispatch(interfaceActions.switchTheme())}
      />
    </aside>
  );
};

export default Sidebar;
