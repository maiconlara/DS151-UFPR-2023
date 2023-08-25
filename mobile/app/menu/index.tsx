import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../styles";


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() => {
          router.push("/average");
        }}
      >
        <Text style={styles.buttonText}>Acessar o app</Text>

      </TouchableOpacity>
    </View>
  );
}
