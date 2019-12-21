import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Platform
} from 'react-native'
import { ScrollView as NestedScroll} from 'react-native-gesture-handler'
import {elevationShadowStyle} from './variable/iosElevation'

import Rating from './rating'
import FavButton from './favButton'
import SubTimeCard from '../components/subTimeCard'

const window = Dimensions.get('window')

const CustomCard = ({cardWidth, category, detail, img,timeline,nested }) => {
  
  return (
    <View style={[styles.cardContainer, { width : window.width / cardWidth}]}>
      <View style={styles.imageCard}>
        <ImageBackground 
          source={img}
          resizeMode="cover"
          style={styles.imageBG}
        >
          <View style={styles.ratingContainer}>
            <Rating value={detail && detail.rating}/>
            <FavButton />
          </View>
          <View style={[styles.categoryContainer, {backgroundColor : detail && detail.color}]}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailCard}>
        <Text style={styles.detailTitle}>{detail && detail.name}</Text>
        <Text style={styles.detailLocation}>{detail && `${detail.address}, ${detail.city}`}</Text>
        <Text style={styles.detailType}>{detail && detail.type}</Text>
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
          {
            timeline && timeline.map((item, index) => (
              <SubTimeCard 
                key={index}
                value={item.value}
                time={item.time}
              />
            ))
          }
        </NestedScroll>
        <View
          style={{
            position : 'absolute',
            bottom : Platform.OS === 'android' ? '-37%' : '-25%',
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
        <Text>Booked <Text style={{fontWeight : 'bold'}}>{detail && detail.totalBooked}</Text> since yesterday</Text>
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
    overflow : 'hidden',
    borderColor : Platform.OS == 'ios' ? 'black' : null,
    borderWidth : Platform.OS == 'ios' ? 0.3 : 0
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
    color : '#fff',
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
