const Person = ({ name, age, hobbies }) => {

  return (
    <div>
      <p>Learn some information about this person:</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <h3>{age >= 18 ? "Please go vote" : " You must be 18"}</h3>
      <h2>Hobbies</h2>
      {/* check if hobbi is empty */}
      {hobbies !== undefined ? (
        <ol>
          {hobbies.map((hobby) => {
            return <li>{hobby}</li>;
          })}
        </ol>
      ) : (
        ""
      )}
    </div>
  );
};
