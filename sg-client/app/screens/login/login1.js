import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
} from 'react-native';
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme,
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/gradientButton';
import {scaleModerate, scaleVertical} from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';

export class LoginV1 extends React.Component {
    static propTypes = {
        navigation: NavigationType.isRequired,
    };
    static navigationOptions = {
        header: null,
    };

    getThemeImageSource = (theme) => (
        theme.name === 'light' ?
            require('../../assets/images/backgroundLoginV1.png') : require('../../assets/images/backgroundLoginV1DarkTheme.png')
    );

    renderImage = () => {
        const screenSize = Dimensions.get('window');
        const imageSize = {
            width: screenSize.width,
            height: screenSize.height - scaleModerate(375, 1),
        };
        return (
            <Image
                style={[styles.image, imageSize]}
                source={this.getThemeImageSource(RkTheme.current)}
            />
        );
    };

    onLoginButtonPressed = () => {
        this.props.navigation.goBack();
    };

    onSignUpButtonPressed = () => {
        this.props.navigation.navigate('SignUp');
    };

    render = () => (
        <RkAvoidKeyboard
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => Keyboard.dismiss()}
            style={styles.screen}>
            {this.renderImage()}
            <View style={styles.container}>
                <RkTextInput rkType='rounded' placeholder='Username'/>
                <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry/>
                <GradientButton
                    style={styles.save}
                    rkType='large'
                    onPress={this.onLoginButtonPressed}
                    text='LOGIN'
                />
            </View>
        </RkAvoidKeyboard>
    )
}

const styles = RkStyleSheet.create(theme => ({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.screen.base,
    },
    image: {
        resizeMode: 'cover',
        marginBottom: scaleVertical(10),
    },
    container: {
        paddingHorizontal: 17,
        paddingBottom: scaleVertical(22),
        alignItems: 'center',
        flex: -1,
    },
    footer: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
    },
    button: {
        marginHorizontal: 14,
    },
    save: {
        marginVertical: 9,
    },
    textRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
}));
