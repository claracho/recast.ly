var VideoDetails = (props) => (
  <div className="video-player-details">
    <h3>{props.video.snippet.title}</h3>
    <div>{props.video.snippet.description}</div>
    <div>View Count: {}</div>
  </div>
);
