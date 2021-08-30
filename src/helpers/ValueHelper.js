import { Dimensions, Platform, StatusBar } from "react-native";

//https://github.com/heyman333/react-native-responsive-fontSize
function RFValue(fontSize, standardScreenHeight = 680) {
  const { height, width } = Dimensions.get("window");
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

  const deviceHeight = Platform.OS === "android" ? standardLength - offset : standardLength;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export function getValue(val) {
  return RFValue(val);
}

