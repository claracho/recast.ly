var Search = (props) => (
  
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={() => props.setVideos(document.querySelector("input").value)} />
    <button className="btn hidden-sm-down" onClick={() => props.setVideos(document.querySelector("input").value)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//     <button className="btn hidden-sm-down" onClick={() => props.searchYouTube({ 'key': window.YOUTUBE_API_KEY, 'query': document.querySelector("input").value, 'max': 5 }, (data) => props.setVideos(data))}>
