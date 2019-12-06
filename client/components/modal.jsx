import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className="modalBody" style={{ display: props.open ? 'block' : 'none' }}>
      <div className="modalButton">
        {props.open && props.children}
      </div>
    </div>
  );
}

export default Modal;
