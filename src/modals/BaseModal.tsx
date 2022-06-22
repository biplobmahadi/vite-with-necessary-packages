import { FC, Fragment } from "react";
import { IBaseModal } from "./interfaces";
import Modal from "react-modal";

const BaseModal: FC<IBaseModal> = ({ children, isOpen, close }) => {
  console.log("ami rendered");
  return (
    <Fragment>
      <Modal isOpen={isOpen} onRequestClose={close} ariaHideApp={false}>
        {children}
      </Modal>
    </Fragment>
  );
};

export default BaseModal;
