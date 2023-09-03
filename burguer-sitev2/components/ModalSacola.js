import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './ModalSacola.module.css';



const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//const portalElement = document.getElementById('overlays');

const ModalSacola = (props) => {

  if (typeof window === "object") {
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop  onClose={props.onClose} />, document.getElementById('overlay'))}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById('overlay')
        )}
      </Fragment>
    );}
    return null
};

export default ModalSacola;
