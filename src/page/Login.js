import React, { Component } from "react";

import Logo from "../component/Logo";
import Form from "../component/Form";

import { Actions } from "react-native-router-flux";
import { View } from "react-native";

export default class Login extends Component {
  sigup() {
    Actions.sigup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
