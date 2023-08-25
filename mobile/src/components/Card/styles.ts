import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 8,
      gap: 4,
      marginBottom: 16,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: -2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    icon: {
      backgroundColor: colors.blue.card,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      padding: 8,
    },
    title: {
      fontWeight: "bold",
      fontSize: 16,
    },
    description: {
      color: "#656F77",
      fontSize: 12,
    },
    content: {
      width: 0,
      flexGrow: 1,
    },
});
