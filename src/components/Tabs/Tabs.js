import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../../style/Colors";
import { styles } from "./style";

type Props = {
  onChange: function,
  isActive: boolean,
  item: string
};

export const Tabs = (props: Props) => {
  const { onChange, isActive, item } = props;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onChange}
                      style={{...styles.tabs,borderBottomWidth: isActive ? 2 : 0,marginTop: isActive ? 2 : 0}}>
      <Text style={{...styles.title, color: isActive ? Colors.header_title : Colors.title }}>{item}</Text>
    </TouchableOpacity>
  );
}
