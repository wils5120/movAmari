import { StyleSheet } from 'react-native'
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StyleSession = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: windowWidth,
        height: '100%',
        resizeMethod : "contain",
    },
    boxTitle: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700'
    },
    boxLogin: {
        flex: 2,
        alignItems: 'center',
        marginTop: 60,
        
    },
    textTtile: {
        justifyContent: 'center',
        fontSize: 40,
        marginTop: 40,
        paddingTop: 50,
        color: '#F60'
    },
    button: {
        paddingVertical: 10,
        width: '50%',
        marginTop: 25,
        borderRadius: 20,
        alignItems: 'center',
    },
    textButtons: {
        fontSize: 20,
        fontWeight: '500',
        color: "black"
    },
    textForget: {
        color: '#000',
        paddingTop: 30,
        fontWeight: '500',
        fontSize:20,
        textDecorationLine: 'underline'
    }
})

export default StyleSession