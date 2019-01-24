import React from "react";
import Transition from 'react-transition-group/Transition'

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
    <Transition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming} // either in ms or object
    >
    {state => {

    const cssClasses = [
        "Modal",
        state === 'entering'
        ? 'ModalOpen'
        : state === 'exiting'
        ? 'ModalClosed'
        : null
    ];

        return (
            <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
                Dismiss
            </button>
            </div>
        )
    }}

    </Transition>
  );
};

export default modal;
