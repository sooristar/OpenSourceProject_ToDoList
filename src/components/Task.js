import React, { useState } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {theme} from '../theme';
import propTypes from 'prop-types';
import IconButton from './IconButton';
import {images} from '../images';
import Input from './Input';

const Task=( {item, deleteTask,toggleTask,updateTask} ) =>{
    const[isEditing,SetIsEditing] =useState(false);
    const[text,setText]= useState(item.text);
    const _handleUpdateButtonPress=()=>{
        SetIsEditing(true);
    }

    const _onSubmitEditing=()=>{
        if(isEditing){
            const editedTask= Object.assign({}, item, {text});
            SetIsEditing(false);
            updateTask(editedTask);
        };
    };

    const _onBlur= () =>{
        if(isEditing){
            SetIsEditing(false);
            setText(item.text);
        };

    };

    return isEditing? (
        <Input value={text} onChangeText={text=> setText(text)} 
        onSubmitEditing={_onSubmitEditing}/>
    ):(
        <View style={taskStyle.container}>
        <IconButton type={item.completed ? images.completed : images.uncompleted}
        id={item.id} onPressOut={toggleTask} completed={item.completed}/>
        
        <Text style={[taskStyle.contents,
        {color:(item.completed ? theme.done: theme.text)},
        {textDecorationLine:(item.completed ? 'line-through':'none')
        }]}>{item.text}</Text>

        {item.completed||(<IconButton type={images.update}
        onPressOut={_handleUpdateButtonPress}/>)}
        <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}
        completed={item.completed}/>
    </View>
    );
};

const taskStyle= StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: theme.planBackground,
        borderRadius:40,
        padding:1,
        marginTop: 10,
        marginLeft: 0,
    },

    contents:{
        flex:1,
        fontSize:24,
        color: theme.text,
    },
});

Task.propTypes={
    item:propTypes.object.isRequired,
    deleteTask:propTypes.func.isRequired,
    toggleTask:propTypes.func.isRequired,
};

export default Task;