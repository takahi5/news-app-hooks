import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { connect } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ArticleScreen = props => {
  const [url, setUrl] = useState();

  useEffect(() => {
    const { article } = props.navigation.state.params;
    setUrl(article.url);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.addClip({ clip: props.navigation.state.params.article });
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>Fav</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.deleteClip({ clip: props.navigation.state.params.article });
        }}
      >
        <Text style={{ margin: 10, fontSize: 30 }}>Del</Text>
      </TouchableOpacity>

      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
};

const mapStateProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = { addClip, deleteClip };
export default connect(
  mapStateProps,
  mapDispatchToProps,
)(ArticleScreen);
