import { router } from "expo-router";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card } from "../../src/components/Card";
import Icon from "@expo/vector-icons/FontAwesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    name: "Calculadora de Média",
    description: "Programa para calcular média de dois numeros",
    icon: "computer",
  },
  {
    id: 2,
    name: "Relogio digital",
    description: "Programa representativo de um relogio",
    icon: "calculate",
  },
  { id: 3, name: "Whatsapp2", description: "O whatsapp porem 2", icon: "add" },
  {
    id: 4,
    name: "To-Do List",
    description: "Organize your tasks with this app",
    icon: "list",
  },
  {
    id: 5,
    name: "Weather App",
    description: "Get real-time weather updates",
    icon: "cloud",
  },
  {
    id: 6,
    name: "Music Player",
    description: "Listen to your favorite music",
    icon: "music",
  },
  {
    id: 7,
    name: "Note Taking",
    description: "Take notes and stay organized",
    icon: "note",
  },
  {
    id: 8,
    name: "Camera App",
    description: "Capture and edit your photos",
    icon: "camera",
  },
  {
    id: 9,
    name: "Fitness Tracker",
    description: "Track your workouts and progress",
    icon: "fitness",
  },
  {
    id: 10,
    name: "Recipe Book",
    description: "Discover and save delicious recipes",
    icon: "recipe",
  },
  {
    id: 11,
    name: "Note Taking",
    description: "Take notes and stay organized",
    icon: "note",
  },
  {
    id: 12,
    name: "Camera App",
    description: "Capture and edit your photos",
    icon: "camera",
  },
  {
    id: 13,
    name: "Fitness Tracker",
    description: "Track your workouts and progress",
    icon: "fitness",
  },
  {
    id: 9,
    name: "Fitness Tracker",
    description: "Track your workouts and progress",
    icon: "fitness",
  },
  {
    id: 10,
    name: "Recipe Book",
    description: "Discover and save delicious recipes",
    icon: "recipe",
  },
  {
    id: 11,
    name: "Note Taking",
    description: "Take notes and stay organized",
    icon: "note",
  },
  {
    id: 12,
    name: "Camera App",
    description: "Capture and edit your photos",
    icon: "camera",
  },
  {
    id: 13,
    name: "Fitness Tracker",
    description: "Track your workouts and progress",
    icon: "fitness",
  },
  {
    id: 9,
    name: "Fitness Tracker",
    description: "Track your workouts and progress",
    icon: "fitness",
  },
  {
    id: 10,
    name: "Recipe Book",
    description: "Discover and save delicious recipes",
    icon: "recipe",
  },
  {
    id: 11,
    name: "Note Taking",
    description: "Take notes and stay organized",
    icon: "note",
  },
  {
    id: 12,
    name: "Camera App",
    description: "Capture and edit your photos",
    icon: "camera",
  },
  {
    id: 13,
    name: "Fitness Tracker",
    description: "Track your workouts and progress",
    icon: "fitness",
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
          return <Card name={item.name} icon={item.icon} key={item.id} />;
        })}
      </View>
    </ScrollView>
  );
}
