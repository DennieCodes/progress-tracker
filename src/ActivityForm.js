import React, { Component } from 'react';

import './ActivityForm.css';

export default class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      timer: 0,
      break: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  // Function that handles when the activity form is submitted passing state back to parent function
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addActivity(this.state);
    this.setState({
      title: "",
      desc: "",
      timer: 0,
      break: 0
    })
  }

  // Function that handles changes to the input forms
  handleChange(evt) {
    this.setState({[evt.target.name] : evt.target.value});
  }

  render() {
    return (
      <div className="activity-card">
        <h3 className="activity-card__title">Add an Activity</h3>
        <p className="activity-card__desc">
          Enter the Activity that you'd like to track, a brief description, the length of time 
          for each cycle and the break time.
        </p>
        
        <form className="activity-form" onSubmit={this.handleSubmit}>
          <label className="activity-form__label" htmlFor="title">Title</label>
          <input className="activity-form__input" type="text" id="title" name="title" required
            value={this.state.title} 
            onChange={this.handleChange}/>

          <label className="activity-form__label" htmlFor="desc">Description</label>
          <textarea className="activity-form__input" id="desc" name="desc" rows="4"
            value={this.state.desc}
            onChange={this.handleChange}>
          </textarea>

          <div className="activity-form__row-grouping">
            <label className="activity-form__label" htmlFor="timer">Minutes for Timer</label>
              <input className="activity-form__input--short" type="number" id="timer" name="timer" required
                placeholder="1500"
                value={this.state.timer}
                onChange={this.handleChange}/>          
          </div>

          <div className="activity-form__row-grouping">
            <label className="activity-form__label" htmlFor="break">Minutes for Break</label>
              <input className="activity-form__input--short" type="number" id="break" name="break" required
                placeholder="300"
                value={this.state.break}
                onChange={this.handleChange}/>
          </div>

          <button className="activity-form__button">Submit</button>
        </form>
      </div>
    )
  }
}
