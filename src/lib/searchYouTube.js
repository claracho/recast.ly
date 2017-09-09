var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    data: {
      'key': options.key,
      'q': options.query,
      'part': 'snippet',
      'maxResults': options.max,
      'type': 'video',
      'videoEmbeddable': 'true'
    },
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: (data) => callback(data.items)
  });

};

window.searchYouTube = searchYouTube;
