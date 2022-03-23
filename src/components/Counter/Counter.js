import React from 'react';
import styles from './Counter.module.css';

class Counter extends React.Component {
  static totalFeedback = 0;
  static percentPositivFeedback = 0;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = () => {
    this.setState(({ good }) => ({ good: good + 1 }));
  };

  handleNeutralIncrement = () => {
    this.setState(({ neutral }) => ({ neutral: neutral + 1 }));
  };

  handleBadIncrement = () => {
    this.setState(({ bad }) => ({ bad: bad + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.totalFeedback = good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    this.percentPositivFeedback = Math.round(
      (100 / this.totalFeedback) * this.state.good
    );
  }

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <>
        <button
          className={styles.btn}
          type="button"
          onClick={this.handleGoodIncrement}
        >
          Good
        </button>

        <button
          className={styles.btn}
          type="button"
          onClick={this.handleNeutralIncrement}
        >
          Neutral
        </button>

        <button
          className={styles.btn}
          type="button"
          onClick={this.handleBadIncrement}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p></p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>
          Total:
          {this.totalFeedback}
        </p>
        <p>
          Positive feedback:
          {/* {this.percentPositivFeedback} */}
          {this.percentPositivFeedback ? this.percentPositivFeedback : '0'}%
        </p>
      </>
    );
  }
}

export default Counter;
