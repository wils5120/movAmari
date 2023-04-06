import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { getPopular } from '../../services/api';
import StyleSession from '../../assets/sessionStyle';
import StyleMainColors from '../../assets/mainColorsStyles';
import LoginScreen from './loginForm';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootPagesParam from '../../types/router.interface';
/* import styled from 'styled-components'; */


type Props = NativeStackScreenProps<RootPagesParam>;

const SesionScreen = ({ navigation }: NativeStackScreenProps<RootPagesParam, 'Sesion'>): JSX.Element => {
	const [imageSession, setImageSession] = useState('')
	const [load, setLoad] = useState(false)
	const [hiddenForm, setHiddenForm] = useState(true)

	useEffect(() => {
		testApi()
	}, [])

	const testApi = async () => {
		const res = await getPopular()
		setImageSession(`https://image.tmdb.org/t/p/original${res.results[0].poster_path}`)
		setLoad(true)
	}


	const viewForm = () => {
		setHiddenForm(true)
	}	

	const goToHome = () => {
		navigation.navigate('TabsHome')
	}	

	return (
		<View style={StyleSession.container}>
			{
				!load ?
					<Text>Cargando...</Text>
					:
					<ImageBackground style={StyleSession.imageBackground} source={{ uri: imageSession }} >
						<View style={StyleSession.boxTitle}>
							<Text style={StyleSession.title} >Welcome!</Text>
						</View>
						<View style={StyleSession.boxLogin}>

							{
								hiddenForm ?
									<>
										<TouchableOpacity style={[StyleSession.button, StyleMainColors.buttomYellow]}>
											<Text style={StyleSession.textButtons}>Sign Up</Text>
										</TouchableOpacity>
										<TouchableOpacity style={[StyleSession.button, StyleMainColors.buttomWhite]} onPress={() => setHiddenForm(false) }>
											<Text style={StyleSession.textButtons}>Log In</Text>
										</TouchableOpacity>
										<Text style={StyleSession.textForget}>Forgot password?</Text>
									</>
									:
									<LoginScreen viewForm={viewForm} goToHome={goToHome} />
							}
						</View>
					</ImageBackground>
			}
		</View>
	)
};

export default SesionScreen;
