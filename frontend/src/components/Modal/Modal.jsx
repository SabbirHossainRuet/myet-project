
import React from 'react';
import './Modal.css'; // Import the updated CSS file

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
