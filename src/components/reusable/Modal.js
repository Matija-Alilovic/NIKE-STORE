import styles from './Modal.module.css';
import reactDom from 'react-dom';

function Backdrop(props) {
  return <div className={styles.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const domElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <>
      {reactDom.createPortal(<Backdrop></Backdrop>, domElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        domElement
      )}
    </>
  );
}

export default Modal;
