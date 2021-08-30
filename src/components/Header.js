import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { getValue } from "../helpers/ValueHelper";
import { Colors } from "../style/Colors";

type Props = {
  title: string,
  leftButtonTitle?: string,
  rightButtonTitle?: string,
  leftButtonOnPress?: function,
  rightButtonOnPress?: function
};
export const Header = (props: Props) => {
  const { title, leftButtonTitle, rightButtonTitle, leftButtonOnPress, rightButtonOnPress } = props;
  return (
    <View style={styles.headerContainer}>

      <TouchableOpacity onPress={leftButtonOnPress}>
        <Text style={styles.buttonTitle}>{leftButtonTitle}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={rightButtonOnPress}>
        <Text style={styles.buttonTitle}>{rightButtonTitle}</Text>
      </TouchableOpacity>

    </View>
  );
};
Header.defaultProps = {
  leftButtonTitle: "Cancel",
  rightButtonTitle: "Done",
};
const styles = StyleSheet.create({
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
