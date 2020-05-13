import React from 'react';
import Modal from 'react-modal';
import Form from '../Form/Form.js';
import LoginForm from '../Form/LoginForm.js';
import './AuthModal.css';

class AuthModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // mode: 'register',
            mode: 'login',
        };
    }

    render() {
        return(
            <Modal
            isOpen={!!this.props.isOpen}
            contentLabel = "Hint"
            closeTimeoutMS={200}
            className="Modal" >
               <div>
                   <div className='modal_header__container'>
                       <div className = 'modal_header__close-button' onClick={() => {
                           this.props.closeModal();
                       }}>X</div>
                   </div>
                   {
                    this.state.mode === 'register'
                    ?
                    <div>
                        <Form />
                        <div className = 'modal_footer' onClick={() => {
                            this.setState({
                                mode: 'login'
                            });
                        }}> Have an account? <strong>Log in</strong> </div>
                    </div>
                    :
                    <div>
                        <LoginForm />
                        <div className = 'modal_footer' onClick={() => {
                            this.setState({
                                mode: 'register'
                            });
                        }}> Don't have an account? <strong>Sign Up</strong> </div>
                    </div>
                   }
               </div>
            </Modal>
       );
    }
}

export default AuthModal;