import React from 'react'
import {
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const FavButton = () => {
  return (
    <TouchableOpacity>
      <Icon name="heart" color="#fff" size={30}/>
    </TouchableOpacity>
  )
}

export default FavButton