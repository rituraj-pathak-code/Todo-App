import React from "react";
import "./ModalWindow.css";

const ModalWindow = (props) => {
  return (
    <div className="modal_container">
      <div className={`modal_window`}>
        <i class="fa fa-solid fa-ban"></i>
        <h1>Oops</h1>
        <p>Please add a new task</p>
        <button onClick={() => props.setModelOpen(false)}>OK</button>
      </div>
    </div>
  );
};

export default ModalWindow;
