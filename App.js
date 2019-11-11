import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ListItem from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/id/10/200/200"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        author="TechNews"
      />
    </View>
  );
}
