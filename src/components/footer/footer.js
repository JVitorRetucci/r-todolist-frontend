import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './style.css';

export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <a href="https://github.com/JVitorRetucci" target="_blank" className="git"><FaGithub />JVitorRetucci</a>
                <a href="https://www.instagram.com/joaovitor_retucci/" target="_blank" className="insta"><AiFillInstagram className="iLogo"/>@joaovitor_retucci</a>
            </footer>
        );
    }
}