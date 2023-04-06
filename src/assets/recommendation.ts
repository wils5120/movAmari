import { StyleSheet } from 'react-native'


const StyleRecommendation = StyleSheet.create({

    contentRecoment: {
        flex: 1,
        marginTop: 20
    },
    image:{
        width: '40%',
        borderRadius: 15,
        height: 160,
    },
    textMovie: {
        color: '#8C8C8C',
        fontSize: 20,
        paddingTop:10,
    },
    textMovieValue: {
        color: '#8C8C8C',
        fontSize: 15,
        marginTop: 10
    },
    boxRecommend: {
        marginTop: 30,
        flexDirection: 'row'
    },
    boxTexts: {
        paddingLeft: 30,
        flex: 1
    },
    boxTextsUp: {
        flex: 1,
        alignContent: 'flex-start',
        alignItems: 'flex-start'
    },
    buttonBox:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttom: {
        flex: 1,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 22
    },
    textButton:{
        textAlign: 'center',
        fontSize: 17,
        paddingHorizontal: 13,
        color: 'black',
    },
    ratink:{
     paddingHorizontal: 5,
     marginTop: 8
    }
})

export default StyleRecommendation