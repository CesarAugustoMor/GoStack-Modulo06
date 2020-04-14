import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import './config/RectotronConfig';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  text: {
    color: '#ccc',
    fontFamily: 'arial',
    fontSize: 60,
  },
});

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>ola</Text>
          <Header />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
