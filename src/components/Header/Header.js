import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

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

