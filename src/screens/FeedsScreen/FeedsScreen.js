import React, { useState } from 'react';
import {StatusBar,SafeAreaView, Text, Dimensions, ScrollView} from 'react-native';
import {viewStyles, textStyles} from './styles';
import Input from './components/Input';
import {images} from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';


export default function App(){
    const width= Dimensions.get('window').width;

    const [newTask, setNewTask]= useState('');

    const [tasks, setTasks]= useState({
        //'1':{id:'1',text:"Todo item #1",completed: false},
        //'2':{id:'2',text:"Todo item #2",completed: true},
    });

    const _addTask = () => {
        alert(`Add new plan: ${newTask}`);
        const ID= Date.now().toString();
        const newTaskObject={
            [ID]: {id: ID, text:newTask, completed:false},
        };
        setNewTask('');
        setTasks({...tasks,...newTaskObject});
    };

    const _deleteTask = id => {
        const currentTasks=Object.assign({},tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    }

    const _toggleTask = id => {
        const currentTasks= Object.assign({},tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    }

    const _updateTask= item =>{
        const currentTasks= Object.assign({},tasks);
        currentTasks[item.id]=item;
        setTasks(currentTasks);
    };

    const _onBlur=()=>{
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle='light-content' style={textStyles.StatusBar}/>
            <Text style={textStyles.title}>TODO LIST</Text> 
            <Input value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask} onBlur={_onBlur}/>

            <ScrollView width= {width-20}>
                {Object.values(tasks).reverse().map( item=> (
                <Task key={item.id} item={item} deleteTask={_deleteTask} toggleTask={_toggleTask}
                updateTask={_updateTask}/>
                ))}
            </ScrollView>

        </SafeAreaView>
    );
}
