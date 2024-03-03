const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>@{username}</p>
      <p>{message}</p>
      <p>{date}</p>
    </div>
  );
};
