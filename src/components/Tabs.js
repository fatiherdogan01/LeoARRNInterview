import * as React from "react";
import { getValue } from "../helpers/ValueHelper";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../style/Colors";

type Props = {
  onChange: function,
  isActive: boolean,
  item: string
};
export const Tabs = (props: Props) => {
  const { onChange, isActive, item } = props;
  return (
    <TouchableOpacity onPress={onChange}
                      style={{
                        backgroundColor: Colors.header_gray,
                        justifyContent: "center",
                        paddingHorizontal: getValue(12),
                        borderBottomColor: "black",
                        borderBottomWidth: props.isActive ? 2 : 0,
                      }}>
      <Text style={{ color: isActive ? Colors.header_title : Colors.title }}>{item}</Text>
    </TouchableOpacity>
  );
}
