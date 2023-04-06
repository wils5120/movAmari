import React, { useEffect, useState } from 'react';
import { View, RefreshControl, ScrollView } from 'react-native';
import { getPopular, getRecommendations } from '../services/api';
import { ResultMovie } from '../interfaces/resultMovie.interfaces';
import Icons from 'react-native-vector-icons/Entypo'
import StyleGenetal from '../assets/generalStyles';
import StyleFavorites from '../assets/favoritesStyles';
import RecommendationComponent from './home/recommendations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavScreen = (): JSX.Element => {
    const [dataMoviesFav, setDataMoviesFav] = useState<ResultMovie>()
    const [refreshing, setRefreshing] = React.useState(false);
    const TitleComponent = 'Favorites'

    useEffect(() => {
        getDataFav()
    }, [AsyncStorage])



    const getDataFav = async () => {
        let getData = await AsyncStorage.getItem("dataFav")
        if (getData !== null) {
            setDataMoviesFav(JSON.parse(getData))
        }
    }

    const onRefresh = () => {
        getDataFav()
    }

    return (
        <View style={StyleGenetal.containerBacground} >
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={false}  onRefresh={onRefresh} />
                }
            >
                <View style={StyleFavorites.contentComponent}>
                    <RecommendationComponent recommendData={dataMoviesFav}/>
                </View>
            </ScrollView>

        </View>
    )
};

export default FavScreen;
