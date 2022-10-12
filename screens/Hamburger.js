import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from './HomeScreen';

const Drawer = createDrawerNavigator();

export default class Hanberger extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.hamburgerMenu} onPress={() => {}}>
        {[...Array(3)].map((_, index) => {
          return <View key={`bar_${index}`} style={styles.hamburgerMenuBar} />;
        })}
      </TouchableOpacity>
    );
  }
}

class OpenDrawer extends Component {
  render() {
    return <Drawer.Navigator></Drawer.Navigator>;
  }
}
class Left extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Left</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hamburgerMenu: {
    width: 30,
    height: 25,
    position: 'absolute',
    left: 20,
  },
  hamburgerMenuBar: {
    width: 25,
    borderBottomWidth: 3,
    borderColor: '#EDC988',
    marginBottom: 7,
  },
});
