import Counter from './Counter/Counter';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        // textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <h1>Please leave feedback</h1>
      <Counter />
    </div>
  );
};
