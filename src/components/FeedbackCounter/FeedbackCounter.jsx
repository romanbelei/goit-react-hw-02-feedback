import React from 'react';
import Sections from './Sections/Sections';
import FeedbackOptions from './Button/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from '../Notification/Notification';

class Counter extends React.Component {
  static totalFeedback = 0;
  static percentPositivFeedback = 0;

  state = {
    good: 0,
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
    const { good, neutral, bad } = this.state;
    this.totalFeedback = good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    // const { good } = this.state;
    this.percentPositivFeedback = Math.round(
      (100 / this.totalFeedback) * this.state.good
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
            // options={['good', 'Neutral', 'Bad']}
            options={objKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Sections>
        {this.totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Sections title="Statistics">
            <Statistics
              good={this.state.good}
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
