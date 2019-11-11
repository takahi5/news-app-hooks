import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ClipScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Clip</Text>
    </SafeAreaView>
  );
};

export default ClipScreen;
