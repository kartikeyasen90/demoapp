import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <View style={{alignItems:"center"}} >
      <View style={{width:"70%",alignItems:"center"}}>
      <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={{width:"70%",alignItems:"center"}}>
      <Text style={styles.body}>{item.body}</Text>
      </View>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
   
    marginTop:70,
    
  },
  image: {
    width: ITEM_WIDTH,
    height: "67%",
    marginTop:50,
    borderRadius:10
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontFamily:'notoserif',
    fontWeight: "bold",
    
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 15,
    paddingTop:20,
    fontFamily:'serif'
  }
})

export default CarouselCardItem