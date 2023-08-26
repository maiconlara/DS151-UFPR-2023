import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";


interface CardProps {
  name: string;
  icon: string;
  routerFunction: () => void;
}
import { styles } from "./styles";
import { colors } from "../../colors";
export function Card({name, icon, routerFunction}: CardProps){
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={routerFunction} >
      <View style={styles.icon}>
      <Icon name={icon} size={20} color={"#000"} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
