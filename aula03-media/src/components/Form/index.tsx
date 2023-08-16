import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";

import { styles } from "./styles";

export function Form() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Calculadora de Média</Text>
      <View style={styles.containerDiv}>
        <Text style={styles.text}>Insira o Primeiro Numero</Text>
        <TextInput style={styles.textInput}> </TextInput>
      </View>

      <View style={styles.containerDiv}>
        <Text style={styles.text}>Insira o Segundo Numero</Text>
        <TextInput style={styles.textInput}> </TextInput>
      </View>

      <View style={styles.containerDiv}>
        <Button
          title="Press me"
          color="#00D8FF"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        ></Button>
      </View>
    </View>
  );
}
