import { StyleSheet } from "react-native";
import { Colors } from "../../style/Colors";
import { getValue } from "../../helpers/ValueHelper";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.header_gray,
    padding: getValue(20),
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.title,
  },
  title: {
    color: Colors.header_title,
    fontWeight: "bold",
  },
  buttonTitle: {
    color: Colors.title,
  },

});
