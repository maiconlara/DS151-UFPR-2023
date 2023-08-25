import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../styles";
import { Card } from "../../src/components/Card";
import Icon from "@expo/vector-icons/FontAwesome";


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card name="Calculadora de Média" description="Programa para calcular média de dois numeros" icon="computer" />
      <Card name="Relogio digital" description="Programa representativo de um relogio" icon="calculate"/>
      <Card name="Whatsapp2" description="O whatsapp porem 2" icon="add" />
    </View>
  );
}
