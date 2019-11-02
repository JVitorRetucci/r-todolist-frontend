import React, { Component } from 'react';
import { FaArrowCircleRight, FaTimesCircle, FaPlusSquare } from 'react-icons/fa';
import './styles.css';

export default class Cards extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInput: '',
            todo: ["Atividade 1", "Atividade 2", "Atividade 3"],
            doing: ["001", "002"],
            done: ["teste"]
        }
    }
    
    changeUserInput(input){
        this.setState({
            userInput: input
        })
    }
        
    addItem(input){
        if(input !== ''){
            let listArray = this.state.todo;
        
            listArray.push(input);

            this.setState({
                todo: listArray,
                userInput: ''
            });
        }
    }

    toDoing(index){
        let listTodo = this.state.todo;
        let listDoing = this.state.doing;

        listDoing.push(listTodo[index]);
        listTodo.splice(index, 1);

        this.setState({
            todo: listTodo,
            doing: listDoing
        });
    }

    toDone(index){
        let listDoing = this.state.doing;
        let listDone = this.state.done;

        listDone.push(listDoing[index]);
        listDoing.splice(index, 1);

        this.setState({
            doing: listDoing,
            done: listDone
        });
    }

    delItem(index){
        let listArray = this.state.done;

        listArray.splice(index, 1);

        this.setState({
            done: listArray
        })
    }

    render(){
        return(
            <div>
                <div className="busca">
                    <input onChange={(e)=>this.changeUserInput(e.target.value)} value={this.state.userInput} type="text" className="input" placeholder="Adicione um novo to do!" />
                    <button type="button" onClick={()=>this.addItem(this.state.userInput)}><FaPlusSquare className="icone" /></button>
                </div>
                <div className="container">
                    <div className="card">
                        <h2>To Do</h2>
                        <ul id="todos">
                            {this.state.todo.map((item, index) => (
                                <li key={index} className="items">{item}<button onClick={()=>this.toDoing(index)}><FaArrowCircleRight className="icon" /></button></li>
                            ))}
                        </ul>
                    </div>
                    <div className="card">
                        <h2>Doing</h2>
                        <ul id="doing">
                            {this.state.doing.map((item, index) => (
                                <li key={index} className="items">{item}<button onClick={()=>this.toDone(index)}><FaArrowCircleRight className="icon" /></button></li>
                            ))}
                        </ul>
                    </div>
                    <div className="card">
                        <h2>Done</h2>
                        <ul id="done">
                            {this.state.done.map((item, index) => (
                                <li key={index} className="items">{item}<button onClick={()=>this.delItem(index)}><FaTimesCircle className="icon" /></button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}