import React from 'react';
import {Pressable, StyleSheet, View, Image} from 'react-native';
import {theme} from '../theme';
import propTypes from 'prop-types';
import {images} from '../images';

const IconButton=({type, onPressOut}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };
    
    return(
        <Pressable onPressOut={onPressOut}>
            <Image source={type} style={iconStyle.icon}/>
        </Pressable>
    );
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
};

export default IconButton;