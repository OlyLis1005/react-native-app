import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>Hell {this.props.name || 'World'}!</Text>
      </View>
    )
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='杨超越'/>
        <Greeting name='Jaina'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});