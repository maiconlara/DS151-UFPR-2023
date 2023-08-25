import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5ED3F3", // Background color
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  text: {
    color: theme.colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
});
