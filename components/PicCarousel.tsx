import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PicCarousel = () => {
  return (
    <View>
        <ScrollView horizontal = {true} style = {styles.scroller}>

            <Image source = {{
            uri : "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            }} style = {styles.picture1}></Image>

            <Image source = {{
            uri : "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            }} style = {styles.picture1}></Image>

            <Image source = {{
            uri : "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            }} style = {styles.picture1}></Image>

        </ScrollView>
    </View>
  )
}

export default PicCarousel

const styles = StyleSheet.create({
    scroller:{
        flex : 1,
        
    },
    picture1 : {
    width : 370,
    height : 370,
    marginRight : 10,
    marginLeft : 10,
  }
})