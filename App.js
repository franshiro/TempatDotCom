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
              bgc = '#f6b93b'
              category="Restaurant"
            />
            <CustomCard 
              cardWidth = {1.25}
              bgc = '#9b59b6'
              category={`Beauty & well`}
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
              bgc = 'green'
              category="Sport"
            />
            <CustomCard 
              cardWidth = {1.5}
              bgc = 'pink'
              category = 'Hotel'
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
