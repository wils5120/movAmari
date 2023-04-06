import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import StyleHome from '../assets/homeStyles';
import StylePopular from '../assets/popular';
import PopularComponent from './home/popular';
import { getPopular, getRecommendations } from '../services/api';
import { ResultMovie } from '../interfaces/resultMovie.interfaces';
import StyleGenetal from '../assets/generalStyles';
import RecommendationComponent from './home/recommendations';
import Icons from 'react-native-vector-icons/Entypo'

const HomeScreen = (): JSX.Element => {
	const [dataMovies, setDataMovies] = useState<ResultMovie>()
	const [recommendData, setRecommendData] = useState<ResultMovie>()
	const TitleComponent = 'Recommendations'

	useEffect(() => {
		getRecomments()
		getPopulars()
	}, [])

	const getPopulars = async () => {
		const res = await getPopular()
		setDataMovies(res.results)
	}

	const getRecomments = async () => {
		const res = await getRecommendations()
		setRecommendData(res.results)
	}



	return (
		<View style={StyleHome.containerMenu} >
			<View style={StylePopular.containerPopular} >
				<Text style={StyleGenetal.textTitle}>Popular</Text>
				<PopularComponent dataMovies={dataMovies} />
				<Text style={StylePopular.seeALL}>See All 
				<Icons name={'chevron-thin-right'} color={'#FFD233'} size={20} style={{paddingLeft:10}} />
				</Text>
			</View>
			<View style={StyleGenetal.line}></View>
			<RecommendationComponent recommendData={recommendData} TitleComponent={TitleComponent} />
		</View>
	)
};

export default HomeScreen;
