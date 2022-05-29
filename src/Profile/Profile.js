//import { Alert } from "bootstrap";
//import React from "react";
import img3 from "../marwa.jpg";
import React, { Component } from 'react';
class Profile extends Component {
  state = { 
    
    fullname : "Kilani Marwa",
    bio : "Développeur Fullstack js,passionnée par la creation des sites web, Polyvalente, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web,de la compréhension des besoins utilisateurs, au développement frontend et backend.",
    profession : "Développeur Fullstack js ",
    img : { img3 },
    counterpro:0,
      
    };
    componentDidMount = () => {
      setInterval(() => {
        this.setState((pre) => ({
          counterpro: pre.counterpro+1,
        }));
      }, 1000);
    };
  render() { 
    return ( 
      <div>
<div className="card-container">
  
  <img className="round" src={this.state.img.img3} width="150px" alt="user" />
  <h3>{this.state.fullname}</h3>
  
  <p> {this.state.profession}</p>
  <p>{this.state.bio}</p>
  <p>{this.state.counterpro}</p>
 
{/*<button className="primary" onClick={(e)=>{handleName("Marwa kilani")}}>me</button>*/}

    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
    </div>
    </div>
  
  );
}
}

export default Profile;
