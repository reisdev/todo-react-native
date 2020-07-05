import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Esta é a Home</Text>
      <Button title={"To-do"} onPress={() => navigation.navigate("todo")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  input: {
    marginTop: 20,
    backgroundColor: "white",
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
});
