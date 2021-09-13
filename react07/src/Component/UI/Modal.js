import { createPortal } from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} />;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {/* <Backdrop/>
        <ModalOverlay>props.children</ModalOverlay> */}
      {createPortal(<Backdrop />, portalElement)}

      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
export default Modal;
