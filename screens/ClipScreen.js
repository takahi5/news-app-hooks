import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ClipScreen = props => {
  console.log(props.user);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.user.clips}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              props.navigation.navigate('Article', { article: item })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const mapStateProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateProps,
  null,
)(ClipScreen);
