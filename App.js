import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

import TitleSegment from './components/titleSegment'
import DealsCard from './components/dealsCard'

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
            <DealsCard />
            <DealsCard />
          </ScrollView>
          <TitleSegment 
            title="Popular Places in Jakarta"
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            styles={styles.scrollCardVertical}
          >
            <DealsCard />
            <DealsCard />
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
