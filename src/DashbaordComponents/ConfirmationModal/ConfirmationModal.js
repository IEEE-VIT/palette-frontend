import React, {Component} from 'react';
import Modal from 'react-modal';

import './ConfirmationModal.css';

class ConfirmationModal extends Component {
    render() {
        return(
            <div>
                <Modal
                isOpen={this.props.isOpen}
                contentLabel = "confirm"
                closeTimeoutMS={200}
                className="confirmation-modal" >
                    <p><strong>Do you want to confirm this as your task?</strong></p>
                    <p>{this.props.task}</p>
                    <div className="confirmation-buttons">
                        <button className="confirmation-button-no" onClick={()=>this.props.forModal()}>No</button>
                        <button className="confirmation-button" onClick={()=>this.props.onLockThisClick()}>Yes</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ConfirmationModal;