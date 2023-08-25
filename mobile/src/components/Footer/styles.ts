import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: theme.colors.text_gray,
    fontFamily: theme.fonts.baiBold, 


  },
  footer: {
    position: 'absolute',
    bottom: getBottomSpace() + 16,
    alignItems: 'center',
    right: 0,
    left: 0,
  }
});