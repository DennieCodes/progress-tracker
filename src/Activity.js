import React, { Component } from 'react';
import './Activity.css';
import Pomodoro from './Pomodoro';


export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      count: 0
    })

    this.counter = this.counter.bind(this);
  }

  // Function counter : increments count by 1
  counter() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    
    let timerLength = parseInt(this.props.timerMin * 60) + parseInt(this.props.timerSec);
    let breakLength = parseInt(this.props.breakMin * 60) + parseInt(this.props.breakSec);

    return (
      <div className="activity-card">
        <h2 className="activity-card__title">{this.props.title}</h2>
        <p className="activity-card__desc">{this.props.desc}</p>
        <Pomodoro
          counter={this.counter} 
          count={this.state.count} 
          timerLength={timerLength} 
          breakLength={breakLength}
        />
      </div>
    )
  }
}
