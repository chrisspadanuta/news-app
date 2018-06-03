import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { getNews } from './src/service/news';
import Article from './src/components/Article';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: true
    };
    this.handleRefresh = this.handleRefresh.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews().then(articles => {
      this.setState({ articles, refreshing: false })
    }).catch(() => {
      this.setState({ refreshing: false })
    });
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <Text>Changes you make will automatically reload.</Text>
    //     <Text>Shake your phone to open the developer menu.</Text>
    //     <Text>Test some more text</Text>
    //   </View>
    // );
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
