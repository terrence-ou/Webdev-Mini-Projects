import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks.ts";
import { RootState } from "../store/index.ts";

import Markdown from "react-markdown";
import ContentArea from "./ContentArea.tsx";

import { interfaceActions } from "../store/interface.ts";

import previewIcon from "../assets/icons/icon-show-preview.svg";
import noPreviewIcon from "../assets/icons/icon-hide-preview.svg";

const Editor = ({
  textAreaRef,
}: {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}) => {
  const dispatch = useAppDispatch();

  /* Getting the current filename and the corresponding markdown text */
  const currFileName: string = useAppSelector(
    (state: RootState) => state.data.currFile,
  );
  const fileText: string | undefined = useAppSelector(
    (state: RootState) =>
      state.data.files.find((file) => file.name === currFileName)?.content,
  );

  const [text, setText] = useState<string | undefined>(fileText);
  const [filename, setFilename] = useState<string>(currFileName);

  /* Getting and setting the visibility of the preview */
  const previewOn: boolean = useAppSelector(
    (state: RootState) => state.interface.previewOn,
  );
  const onChangePreview = () => {
    dispatch(interfaceActions.switchPreview());
  };

  /* Updating the rendered view realtime */
  const onTextChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  /* Updating the Editor contents when the current file changes */
  if (filename != currFileName) {
    setFilename(currFileName);
    setText(fileText);
  }

  return (
    <div className="flex min-h-0 h-full min-w-0">
      <ContentArea
        label="MARKDOWN"
        icon={previewOn ? previewIcon : noPreviewIcon}
        onIconClick={onChangePreview}
      >
        <textarea
          ref={textAreaRef}
          className="overflow-auto h-full px-4 py-2 font-mono text-content text-gray-700 dark:text-gray-400 dark:bg-gray-1000 leading-content resize-none"
          onChange={onTextChange}
          value={text}
        />
      </ContentArea>
      {previewOn && (
        <ContentArea label="PREVIEW">
          <Markdown className="processed-contents font-serif px-6 py-2 h-full overflow-auto dark:bg-gray-1000">
            {text}
          </Markdown>
        </ContentArea>
      )}
    </div>
  );
};

export default Editor;
