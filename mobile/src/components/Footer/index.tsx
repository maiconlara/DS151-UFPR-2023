import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}> Feito com 💙 por Maicon Lara </Text>
    </View>
  );
}
