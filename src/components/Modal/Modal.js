import React from "react";
import CSSTransition from 'react-transition-group/CSSTransition'

import "./Modal.css";

// Used to set animation durations for entering and exiting
const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = props => {

    // If entering show modalOpen, if exiting show modalClosed
  const cssClasses = [
    "Modal"
  ];

  return (
    <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming} // either in ms or object
        classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClosed'
        }}
    >
        <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
            Dismiss
        </button>
        </div>

    </CSSTransition>
  );
};

export default modal;
