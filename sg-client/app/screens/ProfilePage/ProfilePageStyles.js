import {StyleSheet} from 'react-native';

export const ProfileContainerStyles = StyleSheet.create({
    pictureContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
});

export const ProfileComponentStyles =  StyleSheet.create({
    profilePicture: {
        marginTop: 25,
    },
    infoLabel: {
        fontSize: 20,
        fontWeight: '300',
        color: '#999',
        textAlign: 'left',
    },
    infoValue: {
        flex: 1,
        fontSize: 20,
        textAlign: 'right',
    }
});