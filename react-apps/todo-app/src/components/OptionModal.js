import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.displyModal}
            contentLabel='Next Todo'
            onRequestClose={props.handleClearDisplyModalState}
            ariaHideApp={false}
            closeTimeoutMS={200}
            className="option-modal">

            <h3 className="option-modal__title">Next task todo is...</h3>
            {
                props.displyModal && 
                <p className="option-modal__body">
                    {props.displyModal}
                </p>
            } 
            <button 
                onClick={props.handleClearDisplyModalState}
                className="button"
            >
                Okay
            </button>
        </Modal>
    );

export default OptionModal;