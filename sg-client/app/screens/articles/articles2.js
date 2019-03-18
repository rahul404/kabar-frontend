import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet,
} from 'react-native-ui-kitten';
import { SocialBar } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';
import {URL} from "../../constants";

const moment = require('moment');

export class Articles2 extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };


  constructor(props) {
    super();
    this.state = {
      data: []
    };
    this.getNews();
  }


  getNews() {
      fetch(URL)
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  data: responseJson
              });
          });
  }

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = (item) => {
    console.log(JSON.stringify(item));
    this.props.navigation.navigate('Article', { title: item.title, description: item.description });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <RkCard rkType='imgBlock' style={styles.card}>
        <Image rkCardImg source={require('./photo1.png')} />
        <View rkCardImgOverlay rkCardContent style={styles.overlay}>
          <RkText rkType='header4 inverseColor'>{item.title}</RkText>
        </View>
        <View rkCardFooter>
          <SocialBar rkType='space' showLabel />
        </View >
      </RkCard>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={styles.container}
    />
  );
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  time: {
    marginTop: 5,
  },
}));
