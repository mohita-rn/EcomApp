import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../../assets/colors";
import FONTS from "../../assets/fonts";

const CustomButton = ({ title, onPress, style, txtStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, txtStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white', // Default background color
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.primary, // Default text color
    fontSize: 14,
    fontFamily: FONTS.SemiBold
  },
});

export default CustomButton;
