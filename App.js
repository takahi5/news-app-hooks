import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  leftContainer: {
    width: 100,
    backgroundColor: 'red',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
