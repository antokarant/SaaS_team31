import './App.css';
import AskQuestion from './AskQuestion';
import Signup from './Signup';
import Login from './Login';
import Layout from './Layout';
import Home from './Home';
import AllQuestions from './LatestQuestions';
import UserProfile from './UserProfile';
import React from 'react';
import {Route, Link, BrowserRouter, useHistory, withRouter} from 'react-router-dom';
import axios from 'axios';
import querystring from 'querystring';


class Profile extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {  
        };
    } 
    /*<button onClick={()=>console.log(this.state.loggedIn)}></button>
    <button onClick={()=>console.log(localStorage.getItem('token'))}></button> gia elegxo mesa sto render*/
    render()
    {
        return (
            <div className = "App">
                <div className = "main-window">
                    <header className="mainheader">
                        My Profile page
                    </header>
                    <div className = "main-area">
                        <Link to = "/myquestions">
                            <div className = "big-box">My questions</div>
                        </Link>
                            <div className = "big-box">My contributions per day</div>
                        <Link to = "/askquestion">
                            <div className = "big-box"><span className = "regular-text">Ask a question</span></div>
                        </Link>
                        <Link to = "/myanswers">
                            <div className = "big-box"><span className = "regular-text">My answers</span></div>
                        </Link>
                    </div>
                </div>

            </div>

        );
    }
}
export default Profile;
