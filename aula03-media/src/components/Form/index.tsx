import React from "react";
import { Text, View, Button, Alert } from "react-native";
import { FormInput } from "./FormInput";

import { styles } from "./styles";

export function Form() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Calculadora de Média</Text>
      <FormInput text="Primeiro" />
      <FormInput text="Segundo" />

      <View style={styles.containerDiv}>
        <Button
          title="Calcular"
          color="#5ED3F3"
          onPress={() => Alert.alert("Sem alerta papai")}
        ></Button>
      </View>
    </View>
  );
}
