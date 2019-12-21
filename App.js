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
            <CustomCard 
              cardWidth = {1.25}
              bgc = '#f6b93b'
              category='Restaurant'
              nested={useNested}
            />
            <CustomCard 
              cardWidth = {1.25}
              bgc = '#9b59b6'
              category={`Beauty & well`}
              nested={useNested}
            />
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
            <CustomCard 
              cardWidth = {1.5}
              bgc = 'green'
              category="Sport"
              nested={useNested}
            />
            <CustomCard 
              cardWidth = {1.5}
              bgc = 'pink'
              category = 'Hotel'
              nested={useNested}
            />
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
