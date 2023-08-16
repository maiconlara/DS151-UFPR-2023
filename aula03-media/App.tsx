import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Form } from "./src/components/Form";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#09090A",
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Form />
    </View>
  );
}
