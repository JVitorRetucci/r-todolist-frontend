import React, { Component } from 'react';
import { FaArrowCircleRight, FaTimesCircle, FaPlusSquare } from 'react-icons/fa';
import './styles.css';

export default class Cards extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInput: '',
            todo: ["João", "Pedro", "Ju"],
            doing: ["001", "002"],
            done: ["teste"]
        }
    }
        
    addItem = (input) =>{
        let listArray = this.state.todo;
        
        listArray.push(input);
        console.log(listArray);
        

        this.setState({
            todo: listArray,
            userInput: ''
        });
    }

    render(){
        return(
            <div>
                <div className="busca">
                    <input type="text" className="input" placeholder="Adicione um novo to do!" />
                    <button type="button" onClick={this.addItem}><FaPlusSquare className="icone" /></button>
                </div>
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
            </div>
        )
    }
}