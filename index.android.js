import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import cardScreen from './components/cards'
import HomeScreen from './components/HomeScreen'


const tinderMovieSwipe = TabNavigator({
  Home: {screen: HomeScreen},
  Card: {screen: cardScreen},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tinderMovieSwipe', () => tinderMovieSwipe);
