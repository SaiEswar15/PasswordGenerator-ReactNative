import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Carousel = () => {
  return (

    <ScrollView horizontal= {true} style = {styles.scroll} >
    
      
        <View style = {[styles.cards,styles.cardOne]}>
          <Text style = {[styles.info]}>Welcome</Text>
        </View>
        <View style = {[styles.cards,styles.cardTwo]}>
          <Text style = {[styles.info]}>to</Text>
        </View>
        <View style = {[styles.cards,styles.cardThree]}>
          <Text style = {[styles.info]}>the</Text>
        </View>
        <View style = {[styles.cards,styles.cardThree]}>
          <Text style = {[styles.info]}>scroll</Text>
        </View>
        <View style = {[styles.cards,styles.cardThree]}>
          <Text style = {[styles.info]}>Functionality</Text>
        </View>
        <View style = {[styles.cards,styles.cardThree]}>
          <Text style = {[styles.info]}>here</Text>
        </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll : {
    flex : 1,
    margin : 5,
  },
  cards : {
    width : 108,
    height : 100,
    backgroundColor : "#FFFFCC",
    margin : 10,
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : 5,
    elevation : 15,
    
    shadowColor : "black",
    shadowRadius : 100,
    shadowOpacity : 5
  },
  cardOne : {

  },
  cardTwo : {

  },
  cardThree : {

  },
  info : {
    color : "black"
  }
})

export default Carousel

