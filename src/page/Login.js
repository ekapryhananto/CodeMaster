import React, {useState} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import LoginButton from '../components/LoginButton';
import TextInputEmail from '../components/TextInputEmail';
import TextInputPas from '../components/TextInputPass';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.textDigital}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Digital Approval
          </Text>
        </View>
        <Image style={styles.imagelogo} source={require('../logo.png')} />
        <TextInputEmail
          state={email}
          set={setEmail}
          placeholder="Alamat Email"
          isPassword={false}
        />
        <TextInputPas
          state={password}
          set={setPassword}
          placeholder="Password"
          isPassword={true}
        />
        <Text style={styles.textreset}>Reset Password</Text>

        <LoginButton text="LOGIN" color="#287AE5" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 320,
    height: 381,
    marginTop: 199,
    backgroundColor: '#FFFFFF',
  },
  scrollview: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  textDigital: {
    justifyContent: 'center',
    backgroundColor: '#002558',
    borderRadius: 20,
    width: 170,
    height: 36,
    marginTop: -18,
    alignSelf: 'center',
    marginBottom: 35,
  },
  imagelogo: {
    width: 127,
    height: 55,
    alignSelf: 'center',
    marginBottom: 38,
  },
  text: {
    marginVertical: 15,
    fontSize: 18,
  },
  textreset: {
    color: 'blue',
    fontSize: 14,
    marginTop: -8,
    textAlign: 'right',
    fontStyle: 'italic',
  },
});

export default Login;
