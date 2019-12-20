import React, {Fragment} from 'react';
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
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
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
            styles={styles.scrollCardVertical}
          >
            <CustomCard 
              cardWidth = {1.25}
            />
            <CustomCard 
              cardWidth = {1.25}
            />
          </ScrollView>
          <TitleSegment 
            title="Popular Places in Jakarta"
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            styles={styles.scrollCardVertical}
          >
            <CustomCard 
              cardWidth = {1.5}
            />
            <CustomCard 
              cardWidth = {1.5}
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
