import {StyleSheet} from 'react-native';

export const colors = {dark: '#000', light: '#fff'};

export const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  textDark: {
    color: colors.light,
  },
  textLight: {
    color: colors.dark,
  },
});
