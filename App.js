import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'https://www.jonssonsofia.com/static/media/sofia-milo.fe008a5f.jpeg'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    position: center
  },
})
