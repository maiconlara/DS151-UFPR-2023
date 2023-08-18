import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Form } from "./src/components/Form";

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
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.modal_light,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Form />
      
      <Footer />
    </View>
  );
}
