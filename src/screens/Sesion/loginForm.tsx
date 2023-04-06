import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import StyleLogin from '../../assets/loginStyles';
import StyleSession from '../../assets/sessionStyle';
import StyleMainColors from '../../assets/mainColorsStyles';
import * as Animatable from 'react-native-animatable'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ viewForm, goToHome }: any): JSX.Element => {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    let user_maria = 'maria'
    let user_pedro = 'pedro'

    const validateIndentity = () => {
        if((Config.PASSWORD_MARIA === password && user_maria === user) || (Config.PASSWORD_PEDRO === password && user_pedro === user)){
            goToHome()
            AsyncStorage.setItem("login", "1")
        }else{
            Alert.alert("password or name invalid")
            setPassword('')
            setUser('')
        }


    }

    return (
        <View style={StyleLogin.container} >
            <Text style={StyleLogin.exitForm} onPress={() => viewForm(true)} >X</Text>
            <View style={StyleLogin.boxForm} >
                <TextInput placeholder='Name' style={StyleLogin.inputs} placeholderTextColor="#868686" onChangeText={setUser}
                    value={user} />
                <TextInput placeholder='Password' secureTextEntry style={StyleLogin.inputs} placeholderTextColor="#868686" onChangeText={setPassword}
                    value={password} />
                <View style={StyleLogin.boxButton}>
                    <TouchableOpacity style={[StyleSession.button, StyleMainColors.buttomWhite]} onPress={validateIndentity}>
                        <Text style={StyleSession.textButtons}>Log In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};

export default LoginScreen;
