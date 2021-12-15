import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {theme} from '../theme';
import propTypes from 'prop-types';
import IconButton from './IconButton';
import {images} from '../images';

const Task=( {item, deleteTask} ) =>{
    return(
        <View style={taskStyle.container}>
            <IconButton type={images.uncompleted}/>
            <Text style={taskStyle.contents}>{item.text}</Text>
            <IconButton type={images.update}/>
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}/>
        </View>
    )
}

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
};

export default Task;