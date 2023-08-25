import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Form } from "../../src/components/Form";


import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { theme } from "../../src/theme";
import { Footer } from "../../src/components/Footer";

export default function App() {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form />

    </View>
  );
}
    