import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import Carousel from './components/Carousel'
import Carousel2 from './components/Carousel2'
import PicCarousel from './components/PicCarousel'

const App = () => {
  return (

    <ScrollView>
      <View style = {styles.container}>
        <Text style = {styles.text}>app</Text>
        <Text style = {styles.para}>Welcome Again</Text>
        <Carousel/>
        <Carousel2/>
        <Carousel/>
        <Carousel2/>
        <PicCarousel/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : "column",
    backgroundColor : "lightblue",
    
  },
  text : {
    color : "black",
    fontSize : 30,
    textAlign : "center"
  },
  para: {
    color : "black",
    textAlign : "center",
    marginTop : 10
  }
  
})


export default App