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
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          网点管理
        </Text>
        <Text style={styles.welcome}>
          技师管理
        </Text>
        <Text style={styles.welcome}>
          工单管理
        </Text>
        <Text style={styles.welcome}>
          我的工单
        </Text>
      </View>
    );
  }
}


module.exports = Index;