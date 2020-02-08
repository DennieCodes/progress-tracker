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
  }

  // Function that receives a call from child Pomodoro and passes current id back to parent
  counter() {
    this.props.incrementCount(this.state.currentId);
  }

  render() {
    
    let timerLength = parseInt(this.props.timerMin * 60) + parseInt(this.props.timerSec);
    let breakLength = parseInt(this.props.breakMin * 60) + parseInt(this.props.breakSec);

    return (
      <div className="activity-card">
        <h2 className="activity-card__title">{this.props.title}</h2>
        {this.props.desc ? 
          <p className="activity-card__desc">{this.props.desc}</p> : ""
        }
        
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
