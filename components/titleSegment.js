import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TitleSegment = ({title}) => {
  return (
    <View
      style={styles.textContainer}
    >
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text
          style={styles.link}
        >SEE ALL <Icon name="chevron-right"/></Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : "center",
    marginTop : 20,
    marginBottom : 5
  },
  title : {
    fontWeight : "bold",
    fontSize : 23
  },
  link : {
    fontWeight : "bold",
    fontSize : 15,
    color : "#6c5ce7",
    marginRight : 20
  }
})

export default TitleSegment