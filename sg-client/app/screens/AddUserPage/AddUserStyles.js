import {StyleSheet} from 'react-native';

export const AddUserContainerStyles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#ffffff',
        paddingHorizontal: 25,

    },
    addUserContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    }
});

export const AddUserComponentStyles = StyleSheet.create({
    dropdown: {
        marginVertical: 10,
    },
    label: {
        marginTop: 20,
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: '600',
    },
    datepicker: {
        flex: 1,
        marginVertical: 10,
    },
    addButton: {
        marginVertical: 30,
        alignSelf: 'center',
    }
});