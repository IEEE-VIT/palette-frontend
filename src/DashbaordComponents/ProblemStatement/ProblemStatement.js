import React, {Component} from 'react';
import Unlock from '../../assets/images/unlock.svg';
import Lock from '../../assets/images/lock.svg';
import New from '../../assets/images/new.svg';
import cookie from 'react-cookies';
import Confirm from '../../assets/images/thumbsup.svg';

import './ProblemStatement.css';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

class ProblemStatement extends Component {
    constructor() {
        super();
        this.state = {
            isLock1:false,
            isLock2:false,
            isLock3:false,
            firstStatement:'',
            secondStatement:'',
            thirdStatement:'',
            count:0,
            submittedTask:false,
            isLoading:false,
            isOpen:false,
            task:''
        }
    }

    forModal = () => {
        this.setState({
            isOpen:!this.state.isOpen,
            task:`Design a ${this.state.firstStatement} for ${this.state.secondStatement} to help ${this.state.thirdStatement}.`
        })
    }

    onLock1Click = () => {
        this.setState({
            isLock1:!this.state.isLock1
        })
    }

    onLock2Click = () => {
        this.setState({
            isLock2:!this.state.isLock2
        })
    }

    onLock3Click = () => {
        this.setState({
            isLock3:!this.state.isLock3
        })
    }

    componentWillMount() {
        this.onStart();
        // console.log(this.state)
    } 

    onStart = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/user/checkSubmitted`,{
            method: "get",
            headers: {
                'Content-type':'application/json',
                'Authorization': "Bearer "+ cookie.load('PALETTE').uid
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);  
            this.setState({
                count:data.payload.count,
                submittedTask:data.payload.submittedTask
            })
            if(data.payload.submittedTask) {
                this.setState({
                    firstStatement:data.payload.design,
                    secondStatement:data.payload.forA,
                    thirdStatement:data.payload.toHelp
                })
            }
        })
    }

    onGenerateNewClick = () => {
        this.setState({
            isLoading:true,
        });
        fetch(`${process.env.REACT_APP_BACKEND_URL}/user/generateProblem`,{
            method: "post",
            headers: {
                'Content-type':'application/json',
                'Authorization': "Bearer "+ cookie.load('PALETTE').uid
            },
            body: JSON.stringify({
                isLock1: this.state.isLock1,
                isLock2: this.state.isLock2,
                isLock3: this.state.isLock3
            })
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({
                count:data.payload.count
            })
            if(data.payload.newDesign!=="Locked") {
                this.setState({
                    firstStatement: data.payload.newDesign
                })
            }

            if(data.payload.newTo!=="Locked") {
                if(this.state.count === 1) {
                    this.setState({
                        secondStatement: "Deep Learning Demystified"
                    })
                } else {
                    this.setState({
                        secondStatement: data.payload.newTo
                    })
                }
            }
            
            if(data.payload.newToHelp!=="Locked") {
                this.setState({
                    thirdStatement: data.payload.newToHelp
                })
            }
            
            this.setState({
                isLoading:false
            });
        }).catch((err) => {
            // console.log(err);
            this.setState({
                isLoading:false
            });
        });
    }

    onLockThisClick = () => {
        this.setState({
            isOpen:false
        })
        fetch(`${process.env.REACT_APP_BACKEND_URL}/user/lockProblem`,{ 
            method: "post",
            headers: {
                'Content-type':'application/json',
                'Authorization': "Bearer "+ cookie.load('PALETTE').uid
            },
            body: JSON.stringify({
                value1: this.state.firstStatement,
                value2: this.state.secondStatement,
                value3: this.state.thirdStatement,

            })
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data.payload.message)
            this.setState({
                submittedTask:true,
                isLock1:true,
                isLock2:true,
                isLock3:true
            })
        })
        .catch(err => {
            console.log("Problem")
        })
    }

    render() {
        return(
            <div className="problem-statment">
                <div className="problem-statement-title">
                    {(this.state.isLoading)
                    ?   
                        <div className="problem-statement-loading">
                            <strong>Generating new</strong>
                            <div id="wave">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    :
                        <strong>Problem Statement</strong>
                    }
                </div>
                <div className="generate-parent">
                    {(this.state.submittedTask) 
                    ?
                        <div className="problems-display">
                            <button className="actual-lock-button">
                                <img src={Lock} alt="lock" className="lock-after-submitted" />
                            </button>
                            <span className="problem-statement-category"> 
                                Design a {this.state.firstStatement}
                            </span>
                            <button className="actual-lock-button">
                                <img src={Lock} alt="lock" className="lock-after-submitted" />
                            </button>
                            <span className="problem-statement-category">
                                for {this.state.secondStatement} 
                            </span>
                            <button className="actual-lock-button">
                                <img src={Lock} alt="lock" className="lock-after-submitted" />
                            </button>
                            <span className="problem-statement-category"> 
                                to help {this.state.thirdStatement} 
                            </span>
                        </div>
                    :
                        <div className="problems-display">
                            <button className="actual-lock-button" onClick={()=> this.onLock1Click()}>
                                {(this.state.isLock1) ? <img src={Lock} alt="lock" /> : <img src={Unlock} alt="unlock" /> }
                            </button>
                            <span className="problem-statement-category"> 
                                Design a {this.state.firstStatement}
                            </span>
                            <button className="actual-lock-button" onClick={()=> this.onLock2Click()}>
                                {(this.state.isLock2) ? <img src={Lock} alt="lock" /> : <img src={Unlock} alt="unlock" /> }
                            </button>
                            <span className="problem-statement-category">
                                for {this.state.secondStatement} 
                            </span>
                            <button className="actual-lock-button" onClick={()=> this.onLock3Click()}>
                                {(this.state.isLock3) ? <img src={Lock} alt="lock" /> : <img src={Unlock} alt="unlock" /> }
                            </button>
                            <span className="problem-statement-category"> 
                                to help {this.state.thirdStatement} 
                            </span>
                        </div>
                    }
                    

                    {(this.state.submittedTask)
                    ?
                    <div></div>
                    :
                    <div>
                        Tries left: {this.state.count}
                    </div>
                    }

                    {(this.state.submittedTask)
                    ?
                        <div></div>
                    :
                    (this.state.isLoading)
                        ?
                            <div className="row4 generate-lock-buttons">
                                <div className="column4-disabled" style={{borderRight:"2px solid black"}}>
                                    <div className="generate-button"><span> <img src={New} alt="new" style={{opacity:0.8}} /> Generate new </span></div>
                                </div>
                                <div className="column4-disabled">
                                    <div className="generate-button"><span> <img src={Confirm} alt="new" style={{opacity:0.8}} /> Confirm this </span></div>
                                </div>
                            </div>
                        :
                            <div className="row4 generate-lock-buttons">
                                {(this.state.count === 0)
                                ?
                                    <div className="column4-disabled" style={{borderRight:"2px solid black"}}>
                                        <div className="generate-button"><span> <img src={New} alt="new" /> Generate new </span></div>
                                    </div>
                                :
                                    <div className="column4" style={{borderRight:"2px solid black"}} onClick={()=>this.onGenerateNewClick()}>
                                        <div className="generate-button"><span> <img src={New} alt="new" /> Generate new </span></div>
                                    </div>
                                }                                
                                <div className="column4" onClick={()=>this.forModal()}>
                                    <div className="generate-button"><span> <img src={Confirm} alt="new" /> Confirm this </span></div>
                                </div>
                            </div>
                        }
                    </div>
                    
                <ConfirmationModal isOpen={this.state.isOpen} task={this.state.task} forModal={this.forModal} onLockThisClick={this.onLockThisClick} />
            </div>
        )
    }
}

export default ProblemStatement;
