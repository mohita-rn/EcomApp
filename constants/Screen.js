import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

const useWidth = (percentage) => {
    return (SCREEN_WIDTH * percentage) / 100;
  };
  
  const useHeight = (percentage) => {
    return (SCREEN_HEIGHT * percentage) / 100;
  };

export { SCREEN_WIDTH, SCREEN_HEIGHT, useHeight, useWidth };