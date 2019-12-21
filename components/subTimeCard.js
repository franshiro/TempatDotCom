import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const window = Dimensions.get('window')


const SubTimeCard = ({ value, img, time, iconSize }) => {
  const small = require('../assets/img/small.png')
  const large = require('../assets/img/high.png')
  const medium = require('../assets/img/medium.png')

  imgChoose = (value) => {
    if(value >= 0 && value < 0.3 ){
      return small
    }
    else if(value >= 0.3 && value < 0.5){
      return medium
    }
    else if(value >= 0.5){
      return large
    }
  } 

  imgSizeChoose = (value) => {
    if(value >= 0 && value < 0.3 ){
      return 0.4
    }
    else if(value >= 0.3 && value < 0.5){
      return 0.6
    }
    else if(value >= 0.5){
      return 1
    }
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{`${100*value}%`}</Text>
      <Image source={imgChoose(value)} style={{ height : 30 * imgSizeChoose(value), width : 30 * imgSizeChoose(value)}}/>
      <Text>09.00-12.00</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : {
    width : undefined,
    height : 100,
    marginRight : 10,
    alignItems : 'center',
    justifyContent : 'space-evenly'
  }
})

export default SubTimeCard