import React from 'react';
import Sections from './Sections/Sections';
import FeedbackOptions from './Button/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from '../Notification/Notification';

class Counter extends React.Component {
  static totalFeedback = 0;
  static percentPositivFeedback = 0;

  state = {
    fine: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { fine, neutral, bad } = this.state;
    this.totalFeedback = fine + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { fine } = this.state;
    this.percentPositivFeedback = Math.round(
      (100 / this.totalFeedback) * this.state.fine
    );
  }

  render() {
    const objKey = Object.keys(this.state);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            // options={['fine', 'Neutral', 'Bad']}
            options={objKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Sections>
        {this.totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Sections title="Statistics">
            <Statistics
              fine={this.state.fine}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback}
              positivePercentage={this.percentPositivFeedback}
            />
          </Sections>
        )}
      </>
    );
  }
}

export default Counter;
