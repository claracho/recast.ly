var searchYouTube = (options, callback, type) => {
  if (type === 'list') {
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
      success: (data) => {console.log('list search'); callback(data.items);}
    });
  } else if (type === 'video') {
    $.ajax({
      type: 'GET',
      data: {
        'key': options.key,
        'id': options.id,
        'part': 'snippet,contentDetails,statistics',
      },
      url: 'https://www.googleapis.com/youtube/v3/videos',
      success: (data) => {console.log('video search', data.items[0]); callback(data.items[0]);}
    });

  }

};

window.searchYouTube = searchYouTube;
