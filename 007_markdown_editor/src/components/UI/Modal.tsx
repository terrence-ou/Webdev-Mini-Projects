import { Dialog } from "@headlessui/react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { markdownDataActions } from "../../store/markdownData";
import { RootState } from "../../store";

type ModalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ modalOpen, setModalOpen }: ModalProps) => {
  const dispatch = useAppDispatch();
  const currFile = useAppSelector((state: RootState) => state.data.currFile);

  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteFile = () => {
    dispatch(markdownDataActions.deleteFile());
    closeModal();
  };

  return (
    <Dialog
      as="div"
      className="relative z-10 font-serif "
      open={modalOpen}
      onClose={closeModal}
    >
      <div
        className="fixed inset-0 bg-gray-1000/60 dark:bg-gray-600/60"
        aria-hidden="true"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="flex flex-col justify-between w-[343px] h-[218px] rounded-[4px] bg-white dark:bg-gray-900 p-6 text-left">
            <Dialog.Title
              as="h3"
              className="text-[20px] font-bold text-gray-900 dark:text-white"
            >
              Delete this document?
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-header-md leading-content text-gray-500">
                {`Are you sure you want to delete ‘${currFile}’ document and its
                contents? This action cannot be reversed.`}
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="rounded-[4px] w-full h-10 bg-orange-light hover:bg-orange-dark font-sans text-white text-header-lg duration-75"
                onClick={deleteFile}
              >
                Confirm & Delete
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
