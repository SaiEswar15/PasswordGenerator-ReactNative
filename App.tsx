import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import Carousel from './components/Carousel'
// import Carousel2 from './components/Carousel2'
// import PicCarousel from './components/PicCarousel'
import PasswordProject from './components/PasswordProject'


const App = () => {
  return (
    
    <ScrollView style = {styles.container} keyboardShouldPersistTaps = {'handled'}>
      <PasswordProject></PasswordProject>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "lightyellow",
    

  }
  
})


export default App