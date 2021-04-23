import './App.css';
import WriteAnswer from './WriteAnswer';
import React from 'react';
import {Route, Link, BrowserRouter, Redirect} from 'react-router-dom';

class AskQuestion extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            loggedIn: props.loggedIn,
            username: "Agent47"
        };
        console.log("test")
    }

    render()
    {
        if(this.state.loggedIn) return (
            <div className="App">
                <div className = "main-window">
                    <header className="mainheader">
                        Ask question
                    </header>
                    <div className = "main-area">
                        <form>
                            <label className = "regular-text">Question Title:</label>
                            <br />
                            <input type = "text" className = "text-field" name = "questionText" />
                            <label className = "regular-text">Description:</label>
                            <br />
                            <textarea name = "questionText"></textarea>
                            <label className = "regular-text">Keywords:</label>
                            <br />
                            <input type = "text" className = "text-field" name = "keywords" />
                        </form>
                    </div>
                </div>
                <div className = "footnote-wrapper">
                    <Link to = '/'>
                        <button className="small-btn footnote">
                            <span className = "regular-text">Submit</span>
                        </button>
                    </Link>
                    <Link to = '/'>
                        <button className="small-btn footnote">
                            <span className = "regular-text">Cancel</span>
                        </button>
                    </Link>
                </div>
            </div>
        );
        else return(
            <Redirect to = "/"/>
        );
    }
}

export default AskQuestion;