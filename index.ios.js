/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import Router from 'react-native-simple-router';

var Index = require('./components/index');
const propTypes = {
  toRoute: PropTypes.func.isRequired,
};


class HelloPage extends React.Component {
  constructor(props) {
    super(props);

    this.indexPage = this.indexPage.bind(this);
    setTimeout(()=>{
      this.indexPage();
    }, 1000)
  }

  indexPage() {
    this.props.toRoute({
      name: "首页",
      component: Index
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/image/logo.png')} style={styles.logo}/>
        <Text style={styles.slogan}>让养车更简单</Text>
      </View>
    );
    
  }
}

HelloPage.propTypes = propTypes;

// The Router wrapper
class MyApp extends React.Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        bgStyle={styles.bg}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 108,
    height: 44,
  },
  slogan: {
    marginTop: 50,
    color: '#ccc',
    fontSize: 12
  },
  header: {
    backgroundColor: '#C9242F',
  },
  bg: {
    backgroundColor: '#fff',
  },
  enterBtn: {
    backgroundColor: '#C9242F',
    padding: 5,
    marginTop: 30
  }
});

const firstRoute = {
  name: '欢迎',
  component: HelloPage,
};

AppRegistry.registerComponent('heqiauto', () => MyApp);
