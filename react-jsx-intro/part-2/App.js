const App = () => {
  return (
    <Tweet
      name="Alex Cruz"
      username="AlexCruz999"
      message="Hello World."
      date="12:59PM"
    />
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
