const Tweet = ({ username, name, date, message, url }) => {
  return (
    <div className="tweet">
      <div className="user-info-container">
        <p className="tweet-name">
          <img src={url} />
          {name}
        </p>
        <p className="tweet-username">@{username}</p>
      </div>

      <p className="tweet-name">{message}</p>
      <p className="tweet-date">{date}</p>
    </div>
  );
};
