// Tinder.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from './swipeCard/SwipeCards.js';

import LikedMovies from './likedMovies.js'

import basicData from './assets/movieD.json';

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image
          source={{uri: this.props.info.image_url}}
          style={styles.thumbnail}
        />
      <Text>{this.props.title}</Text>
      </View>
    )
  }
})

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hi!</Text>
      </View>

    );
  }
}



export default React.createClass({
  getInitialState() {
    return {
      cards: this.props.moviedata,
      LikedMovies: []
    }
  },
  handleYup (card) {
    var movies = this.state.LikedMovies;
    if(!movies){
      this.setState({LikedMovies:card});
    }
    else{
    movies.push(card);
    this.setState({moviesfromSwiper:movies});
    }
    this.props.callBacktoAddMovie(card);
  },
  handleNope (card) {
    console.log(card)
    this.props.callBackNo(card);
  },
  handleMaybe (card) {
    console.log(card)
  },
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        //stack={true}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  thumbnail: {
  width:150,
  flex:1
 },

})
