import React, { useState } from "react";
import { Text, View, Button, Alert } from "react-native";
import { FormInput } from "./FormInput";

import { styles } from "./styles";

export function Form() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const mean = (firstNumber + secondNumber) / 2;
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Calculadora de Média</Text>
      <FormInput text="Primeiro" handleNumber={setFirstNumber}/>
      <FormInput text="Segundo" handleNumber={setSecondNumber}/>

      <View style={styles.containerDiv}>
        <Button
          title="Calcular"
          color="#5ED3F3"
          onPress={() => Alert.alert(`A média é ${mean}`)}
        ></Button>
      </View>
    </View>
  );
}
