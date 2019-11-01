import React, { Component } from 'react';
import { FaArrowCircleRight, FaTimesCircle } from 'react-icons/fa';
import './styles.css';

export default class Cards extends Component{
    state = {
            todo: ["João", "Pedro", "Ju"],
            doing: ["001", "002"],
            done: ["teste"]
    }
        
    render(){
        return(
            <div className="container">
                <div className="card">
                    <h2>To Do</h2>
                    <ul id="todos">
                        {this.state.todo.map((item, index) => (
                            <li key={index} className="items">{item}<button><FaArrowCircleRight className="icon" /></button></li>
                        ))}
                    </ul>
                </div>
                <div className="card">
                    <h2>Doing</h2>
                    <ul id="doing">
                        {this.state.doing.map((item, index) => (
                            <li key={index} className="items">{item}<button><FaArrowCircleRight className="icon" /></button></li>
                        ))}
                    </ul>
                </div>
                <div className="card">
                    <h2>Done</h2>
                    <ul id="done">
                        {this.state.done.map((item, index) => (
                            <li key={index} className="items">{item}<button><FaTimesCircle className="icon" /></button></li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}