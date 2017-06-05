
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
 ListView,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import responseData from './assets/movieData.json'

import dataView from './dataview.js'



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movies',
  };
  constructor(props) {
  super(props);
  this.state = {
    dataSource: new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    loaded: false,
    dataView: false,
    currentMovie: []
  };
}

componentDidMount() {
  this.fetchData();
}

fetchData() {
  this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
        loaded: true,
      });
}

whenPressed = (movie) => {
  this.setState({currentMovie:movie , dataView:true})
}

render() {
  if (!this.state.loaded) {
    return this.renderLoadingView();
  }
    //console.log(otherResponse.movies.length);
  if(dataView){
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderMovie}
      style={styles.listView}
    />);
}
else{
return(
  //<dataView movie={this.state.currentMovie}/>
  <View>
    <Text>
      Hello!
    </Text>
  </View>

);
}
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
  console.log();
  return (
    <TouchableHighlight>
    <View
      style={styles.container}
    >
      <Image
        source={{uri: movie.info.image_url}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
      </View>
    </View>
    </TouchableHighlight>
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
