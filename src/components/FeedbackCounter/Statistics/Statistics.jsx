import PropTypes from 'prop-types';

const Statistics = ({ fine, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p></p>
      <p>Good: {fine}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage ? positivePercentage : '0'}%</p>
    </>
  );
};

Statistics.propTypes = {
  fine: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
