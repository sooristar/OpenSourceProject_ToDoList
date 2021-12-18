import * as React from 'react';
import {Text,TextInput,View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation,route}){

  React.useEffect(()=>{
    if(route.params?.post){}
  }, [route.params?.post]);

  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={()=>{navigation.navigate('Details', {itemId:86,otherParam:'anything you want here'})}}/>
      <Button title='Create Post' onPress={()=>navigation.navigate('CreatePost')}/>
      <Button title='Go to Profile' onPress={()=>navigation.navigate('Profile',{name: 'Custom profile header!'})}/>
      <Text style={{margin:10}}>Post: {route.params?.post}</Text>
    </View>
  );
}
//home screen 에서 오는 경우: 86
//details screen에서 오는 경우: random number
function DetailsScreen({route, navigation}){
  const {itemId,otherParam}= route.params;
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      
      <Button title='Go to Details again' onPress={()=> 
        navigation.push('Details',{
          itemId: Math.floor(Math.random()*100),
        })}/>

      <Button title='Go to Home' onPress={()=> navigation.navigate('Home')}/>
      <Button title='Go back' onPress={()=> navigation.goBack()}/>
      <Button title='Go back to first screen in stack' onPress={()=> navigation.popToTop()}/>
    </View>
  );
}

function CreatePostScreen({navigation,route}){
  const [postText,setPostText]= React.useState('');
  return(
    <>
    
    <TextInput multiline placeholder="Input title of your plan>"
    style={{height:200,padding:10,backgroundColor:'white'}}
    value={postText}
    onChangeText={setPostText}/>

    <Button title='Done' onPress={()=>{
    navigation.navigate({
      name:'Home',
      params: {post:postText},
      merge: true,
    });
  }}/>

    </>
  );
};

function ProfileScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={()=> navigation.goBack()}/>
    </View>
  )
}

const Stack= createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Overview'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{itemId:42}}/>
        <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={({route})=>({title: route.params.name})}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;