import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import StyleRecommendation from '../../assets/recommendation';
import StyleGenetal from '../../assets/generalStyles';
import { ResultMovie } from '../../interfaces/resultMovie.interfaces';
import StyleMainColors from '../../assets/mainColorsStyles';
import { Rating } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface recommend {
    recommendData: ResultMovie
}


const RecommendationComponent = ({ recommendData, TitleComponent }: recommend | any): JSX.Element => {
    const [isFav, setIsFav] = useState(false)
    const [data, setData] = useState<ResultMovie[]>([])


    useEffect(() => {
        setData(recommendData)
        setIsFav(!isFav)
    }, [recommendData])

    useEffect(() => {
        setData(recommendData)
        setIsFav(!isFav)
    }, [])



    const AddFavs = (dataFav: ResultMovie) => {
        let dataFavs: ResultMovie[] = []
        data.find((item, index) => {
            if (item.id === dataFav.id) {
                recommendData[index].isFav = item.isFav ? false : true
                dataFavs = filterArray(recommendData)
                saveFavData(dataFavs)
            }
        })
        setIsFav(!isFav)
    }

    const filterArray = (dataFav: ResultMovie[]) => dataFav.filter(obj => obj.isFav === true)


    
    const saveFavData = async (data: ResultMovie[]) => {
        await AsyncStorage.setItem("dataFav", JSON.stringify(data))
    }


    const renderItem = ({ item }: { item: ResultMovie }) => (
        <View style={StyleRecommendation.boxRecommend}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }} style={StyleRecommendation.image} />
            <View style={StyleRecommendation.boxTexts}>
                <View style={StyleRecommendation.boxTextsUp}>
                    <Text style={StyleRecommendation.textMovie}> {item.original_title} </Text>

                    <Rating
                        onFinishRating={10}
                        ratingCount={5}
                        startingValue={item.vote_average / 2}
                        ratingBackgroundColor="#8c8"
                        tintColor="#000"
                        imageSize={20}
                        readonly
                        style={StyleRecommendation.ratink}
                    />
                    <Text style={StyleRecommendation.textMovieValue}> {item.vote_average} </Text>
                </View>
                <View style={StyleRecommendation.buttonBox}>
                    <TouchableOpacity style={[StyleRecommendation.buttom, StyleMainColors.buttomYellow]} >
                        <Text style={StyleRecommendation.textButton} >Watch Now</Text>
                    </TouchableOpacity>
                    {
                        item.isFav ?
                            <Icons name={'heart'} color={'#8C8C8C'} size={40} onPress={() => AddFavs(item)} />
                            :
                            <Icons name={'heart-outlined'} color={'#8C8C8C'} size={40} onPress={() => AddFavs(item)} />
                    }
                </View>

            </View>
        </View>
    );


    return (
        <View style={StyleRecommendation.contentRecoment}>
            <Text style={StyleGenetal.textTitle}> {TitleComponent !== undefined ? TitleComponent : ''} </Text>
            {
                data ?
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}

                    />
                    :
                    <ActivityIndicator size={'large'} />
            }
        </View>
    )
};

export default RecommendationComponent;
