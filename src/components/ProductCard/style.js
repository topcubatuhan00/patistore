/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    imageNone: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        opacity: 0.5,
    },
    imageBackground: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ececec',
        padding: 10,
        margin: 5,
        marginBottom: 15,
        borderRadius: 10,
        height: Dimensions.get('window').height / 2.6,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    stock: {
        color: 'red',
        letterSpacing: 0.5,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 0,
        marginTop: 10,
    },
    titleNone: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 0,
        marginTop: 10,
        opacity: 0.5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
});
