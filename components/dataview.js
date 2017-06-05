import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class dataView extends Component{

  render(){
    return(
      <View>
        <Text>
          Hello {this.props.movie.title}
        </Text>
      </View>
    );
  }
}
