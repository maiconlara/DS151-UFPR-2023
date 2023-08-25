import { ScrollView, Text, TouchableOpacity, Image, View } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Footer } from "../src/components/Footer";

import maicon from "../src/assets/maicon.jpeg";

export default function App() {
  const router = useRouter();
  const { bottom, top } = useSafeAreaInsets();
  return (
    // <View
    //   style={{
    //     paddingTop: top,
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //   }}
    // >
    //   <Image source={maicon} style={styles.maicon} />
    //   <Text style={styles.title}>Portifólio Mobile</Text>

   
    // </View>
    <View style={styles.container}>
    <View style={styles.titleContainer}>
    <Image source={maicon} style={{height: 200, width: 200}} />
      <Text style={styles.title}>Portifólio Mobile</Text>
    </View>
    <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() => {
          router.push("/average");
        }}
      >
        <Text style={styles.text}>Acessar o app</Text>
      </TouchableOpacity>
    <Footer />
  </View>
  );
}
