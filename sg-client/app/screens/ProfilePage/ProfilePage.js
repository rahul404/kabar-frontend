import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    RkTextInput,
    RkText,
    RkAvoidKeyboard,
    RkStyleSheet,
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {
    Avatar,
} from '../../components';
import {ProfileComponentStyles, ProfileContainerStyles} from "./ProfilePageStyles";

export class ProfilePage extends React.Component {
    static navigationOptions = {
        title: 'Profile Settings'.toUpperCase(),
    };

    user = data.getUser();

    state = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        country: this.user.country,
        phone: this.user.phone,
        password: this.user.password,
        newPassword: this.user.newPassword,
        confirmPassword: this.user.confirmPassword,
    };


    render = () => (
        <ScrollView style={styles.root}>
            <View style={ProfileContainerStyles.pictureContainer}>
                <Avatar img={this.user.photo} rkType='big' style={ProfileComponentStyles.profilePicture}/>
            </View>
            <View style={styles.section}>
                <View style={[styles.row, styles.heading]}>
                    <RkText rkType='header6 primary'>INFO</RkText>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Email</Text>
                    <Text style={ProfileComponentStyles.infoValue}>happykidies@gmail.com</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
                <View style={ProfileContainerStyles.infoContainer}>
                    <Text style={ProfileComponentStyles.infoLabel}>Name</Text>
                    <Text style={ProfileComponentStyles.infoValue}>Gaurav Punjabi</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base,
    },
    header: {
        backgroundColor: theme.colors.screen.neutral,
        paddingVertical: 25,
    },
    section: {
        marginVertical: 25,
    },
    heading: {
        paddingBottom: 12.5,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 17.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border.base,
        alignItems: 'center',
    },
    button: {
        marginHorizontal: 16,
        marginBottom: 32,
    },
}));
