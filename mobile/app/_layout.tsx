import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { SplashScreen, Stack } from "expo-router";
import { styles } from "./styles";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Footer } from "../src/components/Footer";

export default function Layout() {
  const [isLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!isLoadedFonts) {
    return <SplashScreen />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Stack.Screen name="index" options={{
            title: "Atividades Mobile",
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="average/index" options={{
            title: "Calculadora de Média",
            headerTitleAlign: 'center',
        }}/>
        {/* <Stack.Screen name=""/> */}
      </Stack>
    </View>
  );
}
