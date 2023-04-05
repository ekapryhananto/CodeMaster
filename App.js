import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";

import Routes from "./src/Routes";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
