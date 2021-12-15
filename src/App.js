import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {viewStyles, textStyles} from './styles';

const App= () =>{
    return(
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.StatusBar}/>
            <Text style={textStyles.title}> TODO LIST </Text>
        </SafeAreaView>
    );
};

export default App;