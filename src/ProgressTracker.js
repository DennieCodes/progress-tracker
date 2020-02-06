import React, { Component } from 'react';
import './ProgressTracker.css';
import Activity from './Activity';
import ActivityForm from './ActivityForm';

export default class ProgressTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: []
    }
  }

  render() {
    return (
      <div className="progress-tracker wrapper">
        <section className="activity-index">
          <Activity
            title={'Work on Personal Project'}
            desc={'Practice and reinforce skills in personal or open source projects'}
            dates={'02/03/2020'}
            count={0}
            timerLength={11}
            breakLength={10}
          />
        </section>
        
        <section className="activity-form">
          <ActivityForm />
        </section>
      </div>
    );
  }
}
