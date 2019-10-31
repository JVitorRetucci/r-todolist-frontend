import React, { Component } from 'react';
import { FaArrowCircleRight, FaCheckCircle } from 'react-icons/fa';
import './styles.css';

export default class Cards extends Component{
    state = {
        todo: [],
    }

    render(){
        return(
            <div className="container">
                <div className="card">
                    <h2>To Do</h2>
                    <ul id="todos">
                        <li className="items">Ir na aulda de JS<button><FaArrowCircleRight className="icon" /></button></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Doing</h2>
                    <ul id="doing">
                        <li className="items">Revisar HTML e CSS<button><FaArrowCircleRight className="icon" /></button></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Done</h2>
                    <ul id="done">
                        <li className="items">Ir na reunião de projetos<button><FaCheckCircle className="icon" /></button></li>
                    </ul>
                </div>
            </div>
        )
    }
}