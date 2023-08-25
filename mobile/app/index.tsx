import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { theme } from "../src/theme";
import { styles } from "./styles";

export default function App() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg_900,
        justifyContent: "center",
        alignItems: "center",
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

      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}
