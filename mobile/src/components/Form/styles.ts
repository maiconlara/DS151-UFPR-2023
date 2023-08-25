import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
    top: getStatusBarHeight() - 64,
  },
  containerDiv: {
    alignItems: "center",
    gap: 6,
    marginTop: 20,
  },
  textTitle: {
    position: "absolute",
    top: -40,
    color: "#A1A1AA",
    fontSize: 20,
    fontFamily: theme.fonts.regular,
  },

});
