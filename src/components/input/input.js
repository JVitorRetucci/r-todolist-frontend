import React, { Component } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import './styles.css';

export default class Input extends Component{
    render(){
        return(
            <div className="busca">
                <input type="text" className="input" placeholder="Adicione um novo to do!" />
                <button type="button" className="add"><FaPlusSquare className="icon" /></button>
            </div>
        )
    }
}