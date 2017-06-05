import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
 ListView,
  Text,
  View
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import responseData from './assets/movieData.json'

var otherResponse = {"movies":[
    {
        "year": 2013,
        "title": "Rush",
        "info": {
            "directors": ["Ron Howard"],
            "release_date": "2013-09-02T00:00:00Z",
            "rating": 8.3,
            "genres": [
                "Action",
                "Biography",
                "Drama",
                "Sport"
            ],
            "image_url": "http://ia.media-imdb.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@._V1_SX400_.jpg",
            "plot": "A re-creation of the merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
            "rank": 2,
            "running_time_secs": 7380,
            "actors": [
                "Daniel Bruhl",
                "Chris Hemsworth",
                "Olivia Wilde"
            ]
        }
    }]};


export default class LikedMovies extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    loaded: false,
  };
}

componentDidMount() {
  this.fetchData();
}

fetchData() {
  this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.movies),
        loaded: true,
      });
}

render() {
  if (!this.state.loaded) {
    return this.renderLoadingView();
  }

  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderMovie}
      style={styles.listView}
    />
  );
}

renderLoadingView() {
  return (
    <View style={styles.container}>
      <Text>
        Loading movies...
      </Text>
    </View>
  );
}

renderMovie(movie) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: movie.info.image_url}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
      </View>
    </View>
  );
}
}

var styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},
rightContainer: {
  flex: 1,
},
title: {
  fontSize: 20,
  marginBottom: 8,
  textAlign: 'center',
},
year: {
  textAlign: 'center',
},
thumbnail: {
  width: 53,
  height: 81,
},
listView: {
  paddingTop: 20,
  backgroundColor: '#F5FCFF',
},

});
