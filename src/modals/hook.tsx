import { FC, useState } from "react";
import { IChildren } from "../interfaces/common";
import BaseModal from "./BaseModal";

// in parent component which use this hook
// if hook value change parent component will rerender
// so use wisely - as minimal child render as possible

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const RenderedModal: FC<IChildren> = ({ children }) => {
    if (isOpen) {
      return (
        <BaseModal isOpen={isOpen} close={close}>
          {children}
        </BaseModal>
      );
    }
    return null;
  };

  return { isOpen, open, close, RenderedModal };
};

export default useModal;
