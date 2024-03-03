const App = () => {
  return (
    <div>
      <FirstConponent />
      <NameComponent name="Alex" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
