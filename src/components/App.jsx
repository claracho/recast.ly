class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0]
    };
    this.searchYouTube = props.searchYouTube;
    this.setVideos = _.throttle(this.setVideos.bind(this), 500);
  }

  onTitleClick(newvid) {
    this.setState({
      video: newvid
    });
  }
  
  componentDidMount() {
    this.searchYouTube({ 'key': window.YOUTUBE_API_KEY, 'query': 'test', 'max': 5 }, (data) => this.setState({videos: data, video: data[0] }));
  }

  setVideos(query) {
    this.searchYouTube({ 'key': window.YOUTUBE_API_KEY, 'query': query, 'max': 5 }, (data) => this.setState({videos: data, video: data[0] }));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search setVideos={this.setVideos.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList onTitleClick={this.onTitleClick.bind(this)} videos={this.state.videos}/></div>
          </div>
        </div>
      </div>
    );    
  }

}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><Search /></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer video={exampleVideoData[0]}/></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList videos={exampleVideoData}/></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
