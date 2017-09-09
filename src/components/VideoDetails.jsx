var VideoDetails = (props) => ( 
  <div className="video-player-details">
    <h3>{props.video.snippet.title}</h3>
    <div>{props.video.statistics.viewCount} Views
      <span className="glyphicon glyphicon-thumbs-up px-3">: {props.video.statistics.likeCount}</span>
      <span className="glyphicon glyphicon-thumbs-down px-3">: {props.video.statistics.dislikeCount}</span></div>    
    <div>{props.video.snippet.description}</div>
  </div>
);