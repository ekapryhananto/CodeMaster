import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextInputEmail = props => {
  return (
    <View style={{marginBottom: 24}}>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            elevation: 2,
          }}>
          <Image
            source={require('../email.png')}
            style={{
              padding: 10,
              margin: 5,
              height: 16,
              width: 16,
              resizeMode: 'stretch',
              alignItems: 'center',
            }}
          />
        </View>
        <TextInput
          value={props.state}
          style={{
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 15,
            fontSize: 14,
            borderBottomRightRadius: 15,
            elevation: 2,
            width: 238,
            height: 48,
          }}
          placeholder={props.placeholder}
          onChangeText={text => props.set(text)}
          secureTextEntry={props.isPassword}
        />
      </View>
    </View>
  );
};

export default TextInputEmail;
