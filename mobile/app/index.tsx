import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Footer } from "../src/components/Footer";

export default function App() {
  const router = useRouter();
  const { bottom, top } = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: bottom,
        paddingTop: top,
      }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/average");
        }}
      >
        <Text style={styles.text}>Calculadora de Média</Text>
      </TouchableOpacity>
      
      <Footer />
    </ScrollView>
  );
}
