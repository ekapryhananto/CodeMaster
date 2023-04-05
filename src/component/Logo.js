import React, { Component } from "react";
import { View } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoTwitter}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vZEghz5gLiTmbAD8VagcGEsn0fBYkYOj3w&usqp=CAU",
          }}
        />
        <Text style={styles.text}>Masuk ke Twitter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginVertical: 15,
    fontSize: 18,
  },
});
