import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { getNews, getNewsForGroup } from '../service/news';
import Article from './Article';

export default class Feed extends React.Component {
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
    getNewsForGroup(this.props.feed).then(articles => {
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
