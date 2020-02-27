import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Movie from './screens/Movie'
import Search from './screens/Search'

const MainStack = createStackNavigator({
  Search: {screen: Search},
  Movie: {screen: Movie},
})

const AppContainer = createAppContainer(MainStack)

export default class App extends Component {
  render() {
    return (
      <>
      <StatusBar />
      <View style={styles.container}>
        <AppContainer />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    paddingTop: Constants.statusBarHeight,
  },
});
