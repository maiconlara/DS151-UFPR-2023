import { StyleSheet } from 'react-native';
import { getBottomSpace } from "react-native-iphone-x-helper";
import { colors } from '../../colors';
import { fonts } from '../../fonts';

export const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.roboto, 


  },
  footer: {
    position: 'absolute',
    bottom: getBottomSpace() + 16,
    alignItems: 'center',
    right: 0,
    left: 0,
  }
});