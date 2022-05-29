//import logo froimport './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Profile from './Profile/Profile';
import img3 from "./marwa.jpg";
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  state = { 
    Person:{
    fullname : "Kilani Marwa",
    bio : "Développeur Fullstack js,passionnée par la creation des sites web, Polyvalente, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web,de la compréhension des besoins utilisateurs, au développement frontend et backend.",
    profession : "Développeur Fullstack js ",
    img : { img3 },
    show:false,
    date:""
      }
  }
  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };
  render() {
    return (
      <div>
        <div className="card-container">
        
  <p style={{color:'purple'}}><strong>{this.state.date}</strong></p>
        {this.state.show && <Profile state={this.state}/>}
        <Button variant="outline-secondary" size="lg" onClick={()=>this.setState({show:!this.state.show})}>{this.state.show?"Hide":"Show"}</Button>
      </div>
      </div>
    );
  }
}
export default App;
