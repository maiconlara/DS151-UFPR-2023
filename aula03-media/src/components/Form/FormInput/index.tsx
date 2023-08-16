import React from "react";
import { TextInput, View, Text } from "react-native";

import { styles } from "./styles";

interface FormInputProps {
  text: string;
}

export function FormInput({ text }: FormInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerDiv}>
        <Text style={styles.text}>Insira o {text} Numero</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
        ></TextInput>
      </View>
    </View>
  );
}
