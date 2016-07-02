'use strict';

import React, { Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  AlertIOS
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

class Index extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    var me = this;
    AlertIOS.alert(
     '网络出错',
     '请重试'
    );
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Index Page!
        </Text>
        <Text style={styles.welcome}>
          Welcome to Index Page!
        </Text>
        <Text style={styles.welcome}>
          Welcome to Index Page!
        </Text>
        <Text style={styles.welcome}>
          Welcome to Index Page!
        </Text>
      </View>
    );
  }
}


module.exports = Index;