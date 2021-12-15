import React, { useState } from 'react';
import {StatusBar,SafeAreaView, Text} from 'react-native';
import {viewStyles, textStyles} from './styles';
import Input from './components/Input';
import {images} from './images';
import IconButton from './components/IconButton';


export default function App(){

    const [newTask, setNewTask]= useState('');

    const _addTask = () => {
        alert(`Add: ${newTask}`);
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle='light-content' style={textStyles.StatusBar}/>
            <Text style={textStyles.title}>TODO LIST</Text> 
            <Input value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>

            <IconButton type={images.uncompleted}/>
            <IconButton type={images.completed}/>
            <IconButton type={images.delete}/>
            <IconButton type={images.update}/>
        </SafeAreaView>
    );
}
