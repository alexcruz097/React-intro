const App = () => {
  return (
    <div>
      <Person name="Alex" age={26} hobbies={["Hiking", "eating", "sleeping"]} />
      <Person name="Timmy" age={12} hobbies={["drive", "Football"]}/>
      <Person name="Josh" age={89} hobbies={["Probramming"]}/> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
