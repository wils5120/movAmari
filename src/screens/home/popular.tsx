import React, { useEffect } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import StylePopular from '../../assets/popular';
import { ResultMovie } from '../../interfaces/resultMovie.interfaces';


const PopularComponent = ({ dataMovies }: any): JSX.Element => {

    const renderItem = ({ item }: { item: ResultMovie }) => (
        <View style={StylePopular.boxMovie}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }} style={StylePopular.image} />
            <Text style={StylePopular.textMovie}> {item.original_title} </Text>
            <Text> {item.vote_average} </Text>
        </View>
    );

    return (

        <FlatList
            data={dataMovies}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />

    )
};

export default PopularComponent;
