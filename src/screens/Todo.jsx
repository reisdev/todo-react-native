import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

const Todo = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    "Comprar pão",
    "Capota o corsa",
    "Falar mal de Java",
    "Deploy de aplicação em Deno",
    "Jogar o jogo do Deninho",
    "Voltar pra Ouro 2",
    "Pagar os boletos",
    "Virar partner da Twitch",
    "Ser gado",
    "Aprender mais uma lib de node",
    "Fazer live pro ng",
    "Dar ban no Paulo_Kiitasu",
    "Ser taxado por mandar caule",
  ]);

  const [text, setText] = useState("");

  const addToList = () => {
    const aux = [...tasks];
    aux.push(text);
    setTasks(aux);
    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <TouchableOpacity style={styles.button} onPress={addToList}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.taskList}>
          {tasks.map((task, index) => (
            <View key={index} style={styles.task}>
              <Text style={styles.title}>{task}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: "white",
    flex: 9,
    padding: 10,
    fontSize: 18,
    backgroundColor: "black",
  },
  taskList: {
    alignItems: "center",
  },
  task: {
    flex: 1,
    width: "80%",
    borderColor: "grey",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 14,
  },
  button: {
    padding: 10,
    flex: 1,
    backgroundColor: "#191919",
    color: "white",
  },
  buttonText: {
    color: "white",
  },
});
