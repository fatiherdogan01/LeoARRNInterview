import { StyleSheet } from "react-native";
import { getValue } from "../../helpers/ValueHelper";
import { Colors } from "../../style/Colors";

export const styles = StyleSheet.create({
  tabs:{
  backgroundColor: Colors.header_gray,
  justifyContent: "center",
  paddingHorizontal: getValue(12),
  borderBottomColor: Colors.header_title,
},
  title:{
    fontSize:getValue(14),
    fontWeight:"500"
  }
});
