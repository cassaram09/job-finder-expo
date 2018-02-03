import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from '../components/slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobFinder', color: '#03A9F4' },
  { text: 'Find the perfect job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
]

class WelcomeScreen extends Component {
 
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <View>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
      </View>
    );
  }
}

export default WelcomeScreen;
