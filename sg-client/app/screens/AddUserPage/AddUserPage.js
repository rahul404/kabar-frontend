import React from 'react';
import {
    Keyboard,
    Text,
    View,
    ScrollView,
} from 'react-native';
import {AddUserComponentStyles, AddUserContainerStyles} from "./AddUserStyles";
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import {
    RkTextInput,
    RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import {GradientButton} from "../../components/gradientButton";

export default class AddUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:"2016-05-15"};
    }

    render() {
        let bloodGroups = [{
            key: 1,
            value: 'A +ve',
        }, {
            key: 2,
            value: 'A -ve',
        }, {
            key: 3,
            value: 'B +ve',
        }];

        let proffession = [{
            key: 1,
            value: 'Juice Shop'
        }, {
            key: 2,
            value: 'Buisness Analyst'
        }];

        return (
            <ScrollView>
                <RkAvoidKeyboard
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={() => Keyboard.dismiss()}
                    style={AddUserContainerStyles.screen}>
                    <View style={AddUserContainerStyles.addUserContainer}>

                        <Text style={AddUserComponentStyles.label}>First Name : </Text>
                        <RkTextInput placeholder='Enter the first name' rkType='bordered'/>

                        <Text style={AddUserComponentStyles.label}>Last Name : </Text>
                        <RkTextInput placeholder='Enter the last name' rkType='bordered'/>

                        <Text style={AddUserComponentStyles.label}>Email Id : </Text>
                        <RkTextInput placeholder='Enter you email id' rkType='bordered'/>

                        <Text style={AddUserComponentStyles.label}>Mobile No : </Text>
                        <RkTextInput placeholder='Enter your mobile no' rkType='bordered'/>

                        <Dropdown
                            label='Select Your blood group'
                            fontSize={19}
                            data={bloodGroups}
                            containerStyle={AddUserComponentStyles.dropdown}
                        />

                        <Dropdown
                            label='Select Your proffession'
                            fontSize={19}
                            data={proffession}
                            containerStyle={AddUserComponentStyles.dropdown}
                        />

                        <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select the date of birth"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    width: 0,
                                    height: 0,
                                },
                                dateInput: {
                                    flex: 1,
                                    borderColor: '#e9e9e9',
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />

                        <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select the date of leaving"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            style={AddUserComponentStyles.datepicker}
                            customStyles={{
                                dateIcon: {
                                    width: 0,
                                    height: 0,
                                },
                                dateInput: {
                                    flex: 1,
                                    borderColor: '#e9e9e9',
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />

                        <Text style={AddUserComponentStyles.label}>Place : </Text>
                        <RkTextInput placeholder='Enter the place you live in' rkType='bordered'/>

                        <Text style={AddUserComponentStyles.label}>Taluka : </Text>
                        <RkTextInput placeholder='Enter your taluka' rkType='bordered'/>

                        <Text style={AddUserComponentStyles.label}>District : </Text>
                        <RkTextInput placeholder='Enter your district' rkType='bordered'/>

                        <Text style={AddUserComponentStyles.label}>Degree : </Text>
                        <RkTextInput placeholder='Enter your degree' rkType='bordered'/>

                        <GradientButton
                            style={AddUserComponentStyles.addButton}
                            rkType='large'
                            onPress={this.onLoginButtonPressed}
                            text='ADD USER'
                        />
                    </View>
                </RkAvoidKeyboard>
            </ScrollView>

        );
    }
}