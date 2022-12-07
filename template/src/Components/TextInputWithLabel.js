import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Color from '../Helpers/Color';
import Fonts from '../Helpers/Fonts';
import Responsive from '../Helpers/Responsive';

const TextInputWithLabel = React.forwardRef((props, ref) => {
  const {
    containerStyle = {},
    labelStyle = {},
    label = '',
    style = {},
    multiline = false,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>

      <TextInput
        ref={ref}
        blurOnSubmit={false}
        underlineColorAndroid={'transparent'}
        {...props}
        style={[
          styles.textInput,
          {height: multiline ? undefined : Responsive.verticalScale(40)},
          style,
        ]}
      />
    </View>
  );
});

export {TextInputWithLabel};
const styles = StyleSheet.create({
  label: {
    color: Color.white,
    fontSize: Responsive.moderateScale(12),
    fontFamily: Fonts.regular,
  },
  textInput: {
    paddingHorizontal: Responsive.scale(5),
    borderBottomWidth: Responsive.scale(0.5),
    borderColor: Color.grey,
    fontFamily: Fonts.semibold,
    fontSize: Responsive.moderateScale(14),
    color: Color.white,
  },
});
