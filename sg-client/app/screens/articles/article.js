import React from 'react';

import {
    ScrollView,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import {
    RkCard,
    RkText,
    RkStyleSheet,
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {
    Avatar,
    SocialBar,
} from '../../components';
import NavigationType from '../../config/navigation/propTypes';

const moment = require('moment');

export class Article extends React.Component {
    static propTypes = {
        navigation: NavigationType.isRequired,
    };
    static navigationOptions = {
        title: 'Article View'.toUpperCase(),
    };

    constructor(props) {
        super();
    }

    render = () => (
        <ScrollView style={styles.root}>
            <RkCard rkType='article'>
                <Image rkCardImg source={require('./photo1.png')}/>
                <View rkCardHeader>
                    <View>
                        <RkText style={styles.title} rkType='header4'>{this.props.navigation.getParam('title')}</RkText>
                    </View>
                </View>
                <View rkCardContent>
                    <View>
                        <RkText rkType='primary3 bigLine'>{this.props.navigation.getParam('description')}</RkText>
                    </View>
                </View>
                <View rkCardFooter>
                    <SocialBar/>
                </View>
            </RkCard>
        </ScrollView>
    )
}

const styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base,
    },
    title: {
        marginBottom: 5,
    },
}));
