import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Rating from '../components/rating'
import FavButton from '../components/favButton'

const window = Dimensions.get('window')

const DealsCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageCard}>
        <ImageBackground 
          source={require('../assets/img/gyukaku.jpg')}
          resizeMode="cover"
          style={styles.imageBG}
        >
          <View style={styles.ratingContainer}>
            <Rating />
            <FavButton />
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>Restaurant</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailCard}>
        <Text style={styles.detailTitle}>Gyukaku Buffet</Text>
        <Text style={styles.detailLocation}>Gandaria City, Jakarta Selatan</Text>
        <Text style={styles.detailType}>Grill, Japanese</Text>
      </View>
      <View style={styles.timeCard}>

      </View>
      <TouchableOpacity style={styles.buttonCard}>
        <Text style={styles.buttonText}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer : {
    height : window.height / 1.7,
    width : window.width / 1.2,
    backgroundColor : '#fff',
    marginVertical : 10,
    marginRight : 15,
    marginLeft : 1,
    borderRadius : 7,
    elevation : 5,
    overflow : 'hidden'
  },
  imageCard : {
    height : '40%',
    backgroundColor : 'yellow',
  },
  imageBG : {
    height : '100%',
    width : '100%',
  },
  ratingContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : 10,
  },
  categoryContainer : {
    width : '30%',
    position : 'absolute',
    bottom : 0,
    left : 0,
    backgroundColor : '#f6b93b',
    borderTopRightRadius : 15,
    justifyContent : 'center',
    paddingLeft : 5
  },
  categoryText : {
    color : '#fff'
  },
  detailCard : {
    height : '20%',
    paddingHorizontal : 10,
    justifyContent : 'space-evenly'
  },
  detailTitle : {
    fontSize : 20,
    fontWeight : 'bold',
    color : '#2d3436'
  },
  detailLocation : {
    fontSize : 15,
    color : '#636e72'
  },
  detailType : {
    fontSize : 14,
    color : '#b2bec3'
  },
  timeCard : {
    height : '30%',
  },
  buttonCard : {
    height : '10%',
    alignItems : 'center',
    justifyContent : 'center',
    borderTopWidth : 0.3
  },
  buttonText : {
    fontSize : 20,
    fontWeight : 'bold',
    color : '#e58e26'
  }

})

export default DealsCard
