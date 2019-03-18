import React from 'react';
import {
    FlatList,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import {
    RkText,
    RkCard,
    RkStyleSheet,
} from 'react-native-ui-kitten';
import { SocialBar } from '../../components';
import { data } from '../../data';
import NavigationType from '../../config/navigation/propTypes';
import {URL} from "../../constants";


export class Articles4 extends React.Component {
    static propTypes = {
        navigation: NavigationType.isRequired,
    };
    static navigationOptions = {
        title: 'Article List'.toUpperCase(),
    };

    constructor(props) {
        super();
        this.state = {
            data: []
        };
        this.getNews();
    }

    extractItemKey = (item) => `${item.id}`;

    renderItem = ({ item }) => {
        console.log(JSON.stringify(item));
        return(
            <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('Article')}>
                >
                <RkCard rkType='horizontal' style={styles.card}>
                    <Image rkCardImg source={require('./photo6.png')} />
                    <View rkCardContent>
                        <RkText numberOfLines={1} rkType='header6'>{item.title}</RkText>
                        <RkText rkType='secondary6 hintColor'>
                            {item.author}
                        </RkText>
                        <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{item.description}</RkText>
                    </View>
                    <View rkCardFooter>
                        <SocialBar rkType='space' showLabel />
                    </View >
                </RkCard>
            </TouchableOpacity>
        )
    };

    render = () => (
        <View>
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={this.extractItemKey}
                style={styles.container}
            />
        </View>
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
    post: {
        marginTop: 13,
    },
}));
