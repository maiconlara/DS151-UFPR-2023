import { router } from "expo-router";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card } from "../../src/components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    name: "Calculadora Média",
    icon: "calculate",
    routerFunction: () => {
      router.push("/average");
    },
  },
  {
    id: 2,
    name: "Counter",
    icon: "exposure-plus-1",
    routerFunction: () => {
      router.push("/counter");
    },
  },
  {
    id: 3,
    name: "Colors",
    icon: "invert-colors",
    routerFunction: () => {
      router.push("/rgbColor");
    },
  },
];

export default function App() {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
    >
      <View style={styles.container}>
        {data.map((item) => {
          return (
            <Card
              name={item.name}
              icon={item.icon}
              key={item.id}
              routerFunction={item.routerFunction}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
