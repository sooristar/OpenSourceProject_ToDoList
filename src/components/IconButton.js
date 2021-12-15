import React from 'react';
import {Pressable, StyleSheet, View, Image} from 'react-native';
import {theme} from '../theme';
import propTypes from 'prop-types';
import {images} from '../images';

const IconButton=({type, onPressOut,id}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };
    
    return(
        <Pressable onPressOut={_onPressOut}>
            <Image source={type} style={iconStyle.icon}/>
        </Pressable>
    );
};

IconButton.defaultProps={
    onPressOut:()=>{},
};

const iconStyle= StyleSheet.create({
    icon: {
        tintColor: theme.text,
        width:30,
        height:30,
        margin:10
    },
});

IconButton.propTypes={
    type: propTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: propTypes.func,
    id: propTypes.string,
};

export default IconButton;