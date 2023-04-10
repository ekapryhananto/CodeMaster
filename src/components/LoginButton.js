import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const LoginButton = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        paddingVertical: 14,
        marginTop: 24,
        alignSelf: 'center',
        // marginHorizontal: 25,
        borderRadius: 10,
        elevation: 2,
        width: 288,
        height: 48,
      }}>
      <Text style={{color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
