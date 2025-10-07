import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ onClose, children }: ModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [onClose]);

  return createPortal(
    <div className={css["backdrop"]} onClick={handleBackdropClick}>
      <div className={css["modal"]}>
        {children}
        <button onClick={onClose}>x</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
