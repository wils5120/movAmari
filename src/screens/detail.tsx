import React from 'react';
import { Text, View } from 'react-native';
import StyleGenetal from '../assets/generalStyles';

export interface HomeInterface { }

const DetailScreen = (): JSX.Element  => {
	return (
		<View style={StyleGenetal.containerBacground}>
			<Text>Hola detalle bro</Text>
		</View>
	)
};

export default DetailScreen;
