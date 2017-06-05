
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Tinder from './tinder.js'
import { TabNavigator } from 'react-navigation';

var num = 0;
import LikedMovies from './likedMovies.js'
import responseData from './assets/movieData.json'

export default class cardScreen extends React.Component {
  static navigationOptions = {
    title: 'Cards',
  };

  constructor(props) {
    super(props);
    this.state = {
        moviesfromSwiper: [],
        numSwipes: responseData.movies.length,
        viewLikes: false,
        moviesStilltoSwipe:responseData.movies
    };
}


swiperCallback = (newMovie) => {
  var movies = this.state.moviesfromSwiper;
  if(!movies){
    this.setState({moviesfromSwiper:newMovie});
  }
  else{
  movies.push(newMovie);
  this.setState({moviesfromSwiper:movies});
}
  var stillToSwipe = [];
  var moviesStill = this.state.moviesStilltoSwipe;
  for(var i = 0 ; i < moviesStill.length ; i++)
  {
    if(moviesStill[i].title !== newMovie.title)
    {
      //console.log(moviesStill[i])
      stillToSwipe.push(moviesStill[i])
    //  console.log(stillToSwipe)

    }
  }
  console.log(stillToSwipe)
  console.log(movies)
  this.setState({moviesStilltoSwipe:stillToSwipe})
  console.log(this.state.moviesStilltoSwipe)
}

swiperCallNo = (newMovie) => {
  var stillToSwipe = [];
  var moviesStill = this.state.moviesStilltoSwipe;
  for(var i = 0 ; i < moviesStill.length ; i++)
  {
    console.log(newMovie)
    if(moviesStill[i].title !== newMovie.title)
    {

      console.log(moviesStill[i])
      stillToSwipe.push(moviesStill[i])
      console.log(stillToSwipe)

    }
  }

  this.setState({moviesStilltoSwipe:stillToSwipe})


}

changeView = () => {

  this.setState(this.state.viewLikes?{viewLikes: false}:{viewLikes: true})
}

  render() {
    const { navigate } = this.props.navigation;

    if(!this.state.viewLikes)
    {
    return(
      <View style={styles.container}>

        <Tinder
          callBacktoAddMovie = {this.swiperCallback}
          callBackNo = {this.swiperCallNo}
          moviedata={this.state.moviesStilltoSwipe}
          style={styles.container}/>
        <Button
          style={styles.button}
          onPress={this.changeView}
          title="See Likes"
        />

      </View>
       );
    }
    else {
      return(
        <View>
          <Button
            style={styles.button}
            onPress={this.changeView}
            title="Go Back"
          />
          <LikedMovies movies={this.state.moviesfromSwiper}/>

      </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button:{
    marginTop:10,
    color: '#dc143c',
    borderWidth: 20,
    borderRadius: 10
  }

});
