import React, {Component, Fragment, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

import TitleSegment from './components/titleSegment'
import CustomCard from './components/customCard'
import {deals, popular} from './components/dataJson/dummy'


const App = () => {
  const [enable , setEnable ] = useState(true)

  const useNested = (value) => {
    setEnable(value)
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollContainer}
        >
          <TitleSegment 
            title="Deals of the Day"
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={enable}
            styles={styles.scrollCardVertical}
          >
            {
              deals && deals.map((item, index) => (
                <CustomCard 
                  key={index}
                  cardWidth = {1.25}
                  category={item.category}
                  detail={item.detail}
                  timeline={item.timeline}
                  img={item.img}
                  nested={useNested}
                />
              ))
            }
          </ScrollView>
          <TitleSegment 
            title="Popular Places in Jakarta"
          />
          <ScrollView
            horizontal
            scrollEnabled={enable}
            showsHorizontalScrollIndicator={false}
            styles={styles.scrollCardVertical}
          >
            {
              popular && popular.map((item, index) => (
                <CustomCard 
                  key={index}
                  cardWidth = {1.5}
                  category={item.category}
                  detail={item.detail}
                  timeline={item.timeline}
                  img={item.img}
                  nested={useNested}
                />
              ))
            }
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#fff",
    paddingLeft : 20
  },
  scrollCardVertical : {
    backgroundColor : 'green',
  }
});

export default App;
