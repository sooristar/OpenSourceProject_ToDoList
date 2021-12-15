import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {theme} from '../theme';
import propTypes from 'prop-types';
import IconButton from './IconButton';
import {images} from '../images';

const Task=( {item, deleteTask,toggleTask} ) =>{
    return(
        <View style={taskStyle.container}>
            <IconButton type={item.completed ? images.completed : images.uncompleted}
            id={item.id} onPressOut={toggleTask} completed={item.completed}/>
            
            <Text style={[taskStyle.contents,
            {color:(item.completed ? theme.done: theme.text)},
            {textDecorationLine:(item.completed ? 'line-through':'none')
            }]}>{item.text}</Text>

            {item.completed||<IconButton type={images.update}/>}
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}
            completed={item.completed}/>
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
    toggleTask:propTypes.func.isRequired,
};

export default Task;