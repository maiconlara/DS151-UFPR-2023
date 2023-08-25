import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

interface CardProps {
  name: string;
  description: string;
  icon: string;
}
import { styles } from "./styles";
import { colors } from "../../colors";
export function Card({name, description, icon}: CardProps){
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>
      <Icon name={icon} size={20} color={"#000"} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
