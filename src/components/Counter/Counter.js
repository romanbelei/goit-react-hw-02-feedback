import React from 'react';
import styles from './Counter.module.css';

class Counter extends React.Component {
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

  //   componentDidMount() {
  //     const { good, neutral, bad } = this.state;
  //     const totalClicks = good + neutral + bad;

  //     document.title = `Всего кликнули ${totalClicks} раз`;
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     const { good, neutral } = this.state;

  //     if (prevState.good !== good || prevState.neutral !== neutral) {
  //       const totalClicks = good + neutral;

  //       document.title = `Всего кликнули ${totalClicks} раз`;
  //     }
  //   }

  render() {
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
          {this.state.good + this.state.neutral + this.state.bad}
        </p>
        <p>
          Positive feedback:
          {(100 / (this.state.good + this.state.neutral + this.state.bad)) *
          this.state.good
            ? Math.round(
                (100 /
                  (this.state.good + this.state.neutral + this.state.bad)) *
                  this.state.good
              )
            : '0'}
        </p>
      </>
    );
  }
}

export default Counter;
{
  /* <p>
  Positive feedback:
  {(100 / (this.state.good + this.state.neutral + this.state.bad)) *
    this.state.good}
  && 0
</p>; */
}
