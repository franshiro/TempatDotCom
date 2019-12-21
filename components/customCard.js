import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native'
import { ScrollView as NestedScroll} from 'react-native-gesture-handler'

import Rating from './rating'
import FavButton from './favButton'
import SubTimeCard from '../components/subTimeCard'

const window = Dimensions.get('window')
const small = require('../assets/img/small.png')
const larga = require('../assets/img/high.png')
const medium = require('../assets/img/medium.png')

const CustomCard = ({cardWidth, bgc, category, nested }) => {
  return (
    <View style={[styles.cardContainer, { width : window.width / cardWidth}]}>
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
          <View style={[styles.categoryContainer, {backgroundColor : bgc}]}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailCard}>
        <Text style={styles.detailTitle}>Gyukaku Buffet</Text>
        <Text style={styles.detailLocation}>Gandaria City, Jakarta Selatan</Text>
        <Text style={styles.detailType}>Grill, Japanese</Text>
      </View>
      <View style={styles.timeCard}>
          <NestedScroll
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
            onTouchStart={() => nested(false)}
            onTouchCancel={() => nested(true)}
            onMomentumScrollEnd={() => nested(true)}
            onScrollEndDrag={() => nested(true)}
            style={{
              flex : 1,
              zIndex : 2,
              paddingHorizontal : 10
            }}
          >
            <SubTimeCard value={0.5} />
            <SubTimeCard value={0.1} />
            <SubTimeCard value={0.35} />
            <SubTimeCard value={0.6} />
          </NestedScroll>
        <View
          style={{
            position : 'absolute',
            bottom : '-38%',
            width : 100,
            height : 150,
            borderRadius : 100,
            transform : [{
              scaleX : 5,
            }],
            borderColor : 'grey',
            borderWidth : 0.5,
            paddingHorizontal : 10,
            zIndex : 1
          }}
        />
        <View style={styles.totalBooked}>
          <Text>Booked <Text style={{fontWeight : 'bold'}}>1002</Text> since yesterday</Text>
        </View>
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
    height : 20,
    width : undefined,
    position : 'absolute',
    bottom : 0,
    left : 0,
    borderTopRightRadius : 15,
    justifyContent : 'center',
    padding : 10,
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
    alignItems : 'center',
    height : '30%',
    overflow : 'hidden'
  },
  totalBooked : {
    width : '100%',
    position : 'absolute',
    bottom : 10,
    alignItems : 'center'
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

export default CustomCard
