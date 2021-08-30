import { StyleSheet } from "react-native";
import { getValue } from "../../helpers/ValueHelper";
import { Colors } from "../../style/Colors";

export const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: getValue(10),
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: getValue(12),
    width: getValue(50),
    height: getValue(50),
    borderColor: Colors.button_gray,
    borderWidth: 3,
  },
  image: {

    borderRadius: getValue(12),
    width: getValue(40),
    height: getValue(40),
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: getValue(12),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: getValue(35),
    backgroundColor: Colors.button_gray,
    borderRadius: getValue(20),
  },
  buttonTitle: {
    color: Colors.header_title,
    fontSize: getValue(14),
  }
});
