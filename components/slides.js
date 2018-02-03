import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Slides extends Component {
  renderButton(index){
    if (index == this.props.data.length - 1) {
      return ( 
        <Button 
          raised 
          buttonStyle={styles.buttonStyle} 
          containerViewStyle={{ marginTop: 20 }}
          title='Onwards!' 
          onPress={this.props.onComplete}
        />
      )
    }
  }
  renderSlides(){
    return this.props.data.map((slide, index) => {

      return (
        <View 
          style={[styles.slideStyle,{ backgroundColor: slide.color }]} 
          key={slide.text}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderButton(index)}
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView 
      horizontal
      contentContainerStyle={styles.contentContainer}
        pagingEnabled
        >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  }
});

export default Slides;