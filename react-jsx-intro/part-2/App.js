const App = () => {
  return (
    <div className="tweet-container">
      <Tweet
        name="Alex Cruz"
        username="AlexCruz999"
        message="Hello World."
        date="12:59PM"
        url="https://pbs.twimg.com/profile_images/2836652250/0d62756dbed303c9525d6d91f59b696a_400x400.jpeg"
      />
      <Tweet
        name="Alex Cruz"
        username="AlexCruz999"
        message="Hello World."
        date="12:59PM"
        url="https://pbs.twimg.com/profile_images/2836652250/0d62756dbed303c9525d6d91f59b696a_400x400.jpeg"
      />

      <Tweet
        name="Alex Cruz"
        username="AlexCruz999"
        message="Hello World."
        date="12:59PM"
        url="https://pbs.twimg.com/profile_images/2836652250/0d62756dbed303c9525d6d91f59b696a_400x400.jpeg"
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
