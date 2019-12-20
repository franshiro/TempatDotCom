import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Rating = () => {
  return (
    <View style={styles.container}>
      <Icon name="star" solid={true} color="#fff"/>
      <Text style={styles.ratingValue}> 5.0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    height : 25,
    width : 50,
    borderRadius : 10,
    backgroundColor : '#079992',
    flexDirection : "row",
    justifyContent : 'center',
    alignItems : 'center',
  },
  ratingValue : {
    color : '#fff',
  }
})

export default Rating