import { StyleSheet } from "react-native";
import { fonts } from "../../src/fonts";
import { colors } from "../../src/colors";

export const styles = StyleSheet.create({
  button: {
    marginTop: 48,
    alignItems: "center",
    minWidth: "40%",
    borderRadius: 9999,
    backgroundColor: colors.blue.button,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontFamily: fonts.baiBold,
    fontSize: 14,
    textTransform: "uppercase",
    color: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  text: {
    fontFamily: fonts.robotoBold,
    fontSize: 48,
    color: colors.blue.title,
  },
  textContainer: {
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textInput: {
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    height: 40,
    minWidth: 200,
    width: "100%",
    maxWidth: 165,
    borderRadius: 6,
    fontFamily: fonts.roboto,
  },
  help: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.blue.card,
    borderRadius: 9999,
    width: 20,
    height: 20,
  },
  helpText: {
    color: colors.blue.card,
    fontFamily: fonts.roboto,
    fontSize: 14,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 164,
    minHeight: 242,
    maxWidth: 246,
    maxHeight: 363,
  },
});
