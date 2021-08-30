import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { getValue } from "../helpers/ValueHelper";
import { Colors } from "../style/Colors";

type Props = {
  image: string,
  artistName: string,
  name: string,
  tags: Array,
  onPress?: function
};

export const ListCard = (props: Props) => {
  const { image, artistName, name, tags, onPress } = props;
  return (
    <View style={{ flexDirection: "row", margin: getValue(5) }}>
      <View style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: getValue(12),
          width: getValue(50),
          height: getValue(50),
          borderColor: Colors.button_gray,
          borderWidth: 3,
        }}>
          <Image resizeMode={"contain"}
                 style={{ borderRadius: getValue(12), width: getValue(40), height: getValue(40) }}
                 source={{ uri: `${image}` }} />
        </View>
      </View>

      <View style={{ flex: 5 }}>
        <Text style={{ fontWeight: "bold" }}>{artistName}</Text>
        <Text style={{ fontSize: getValue(12) }}>{name}</Text>

        <View style={{ flexDirection: "row" }}>
          {tags.map((item, index) => {
            if (index > 2) return;
            return <Text style={{ fontSize: getValue(12) }}>#{item} </Text>;
          })}
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <TouchableOpacity onPress={onPress} style={{
          justifyContent: "center",
          alignItems: "center",
          height: getValue(35),
          backgroundColor: Colors.button_gray,
          borderRadius: getValue(20),
        }}>
          <Text style={{fontSize:getValue(14)}}>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
