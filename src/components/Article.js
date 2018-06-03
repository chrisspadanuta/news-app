import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const time = moment(publishedAt || moment.now()).format('MM/DD/YYYY @ h:mma');
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={styles.featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={styles.footerInfo}
          >
            <Text style={styles.footerItem} numberOfLines={1}>{source.name.toUpperCase()}</Text>
            <Text style={{...styles.footerItem, ...styles.alignRight}}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    fontStyle: 'italic',
    color: '#222222',
    fontSize: 14
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  footerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerItem: {
    marginTop: 5,
    marginBottom: 5,
    fontStyle: 'italic',
    color: '#222222',
    fontSize: 14,
    flex: 1
  },
  alignRight: {
    textAlign: 'right'
  }
};
