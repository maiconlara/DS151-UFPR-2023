import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";

import { Form } from "./src/components/Form";

import blur from "./src/images/blur.png";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { theme } from "./src/theme";
import { Footer } from "./src/components/Footer";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      source={blur}
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg_900,
        justifyContent: "center",
        alignItems: "center",
      }}
      imageStyle={{ position: "absolute", bottom: "-100%" }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Form />

      <Footer />
    </ImageBackground>
  );
}
