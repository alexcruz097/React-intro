const App = () => {
  return (
    <div>
      <Person name="Alex" age={26} hobbies={["Hiking", "eating", "sleeping"]} />
      <Person name="Timmy" age={12} />
      <Person name="Josh" age={89} /> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
