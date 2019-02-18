/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings from "./logs-of-greetings.js";
import BlinkApp from "./blink";
import PizzaTranslator from "./pizza-translator";
import PressButton from "./press-button";
import TouchableItem from "./touchable-item";
import IScrolledDownAndWhatHappenedNextShockedMe from "./scroll-item";
import SectionListBasics from "./section-list-basics";
import SampleAppMovies from "./sample-app-movies";
import NavigatorIOSApp from "./navigation-ios-app";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class ShowPicture extends Component {
  render() {
    let pic = {
      url: '0068Xz9bgy1fhsy0nwp5qj30ln0q90v7.jpg'
    };
    return (
      <View>
        <Image srouce={'./0068Xz9bgy1fhsy0nwp5qj30ln0q90v7.jpg'} style={styles.picture} />
      </View>
    )
  }
}

export default class App extends Component<Props> {
  render() {
    let pic = {
      url: '0068Xz9bgy1fhsy0nwp5qj30ln0q90v7.jpg'
    };
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
        {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
        {/*<Text style={styles.instructions}>{instructions}</Text>*/}
        {/*<ShowPicture />*/}
        {/*<Image srouce={pic} style={styles.picture} />*/}
        {/*<Text style={styles.instructions}>{instructions}</Text>*/}
        {/*<LotsOfGreetings />*/}
        {/*<BlinkApp />*/}
        {/*<PizzaTranslator />*/}
        {/*<PressButton />*/}
        {/*<TouchableItem />*/}
        {/*<IScrolledDownAndWhatHappenedNextShockedMe />*/}
        {/*<SectionListBasics />*/}
        {/*<SampleAppMovies />*/}
        <NavigatorIOSApp />
      </View>
    );
  }
}

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
  picture: {
    width: 193,
    height: 110
  }
});
