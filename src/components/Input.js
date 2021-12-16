import React from 'react';
import { StyleSheet, TextInput, Dimensions} from 'react-native';
import {theme} from '../theme';

const Input = ({value, onChangeText, onSubmitEditing,onBlur}) =>{
    return (
        <TextInput style={inputStyle.TextInput}
            placeholder= "+ Add a task"
            placeholderTextColor={theme.main}
            marginTop={20}
            marginBottom={30}
            height={55}
            maxLength={20}
            keyboardApperance="dark"
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}>
        </TextInput>
        
    );
};

const inputStyle= StyleSheet.create({
    TextInput:{
        fontSize:25,
        width: Dimensions.get('window').width-20,
        height:40, 
        marginTop:10,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:10,
        backgroundColor:theme.itemBackground,
        color:theme.text,
    },
});

export default Input;