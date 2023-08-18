import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        
      },
      containerDiv: {
        alignItems: "center",
        gap: 6,
        marginTop: 20,
      },
      text: {
        color: theme.colors.text_gray,
        fontFamily: theme.fonts.medium,
      },
      textInput: {
        backgroundColor: "#fff",
        height: 40,
        width: '100%',
        maxWidth: 165,
        borderRadius: 6,
        fontFamily: theme.fonts.regular,
      },

});