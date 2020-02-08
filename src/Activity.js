import React, { Component } from 'react';
import './Activity.css';
import Pomodoro from './Pomodoro';


export default class Activity extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentId: this.props.id
    }
  
    this.counter = this.counter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function that receives a call from child Pomodoro and passes current id back to parent
  counter() {
    this.props.incrementCount(this.state.currentId);
  }

  // Function that handles when delete X button is clicked
  handleSubmit() {
    this.props.removeActivity(this.state.currentId);
  }

  render() {
    
    let timerLength = parseInt(this.props.timerMin * 60) + parseInt(this.props.timerSec);
    let breakLength = parseInt(this.props.breakMin * 60) + parseInt(this.props.breakSec);

    return (
      <div className="activity-card">
        <span className="activity-card-header">
          <h2 className="activity-card__title">{this.props.title}</h2>
          <button onClick={this.handleSubmit} className="activity-card-header__button">X</button>
        </span >
        
        {this.props.desc ? 
          <p className="activity-card__desc">{this.props.desc}</p> : ""}
        
        <Pomodoro
          counter={this.counter} 
          count={this.props.count} 
          timerLength={timerLength} 
          breakLength={breakLength}
        />
      </div>
    )
  }
}
