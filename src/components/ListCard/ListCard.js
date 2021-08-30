import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

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
    <View style={styles.main}>
      <View style={{ flex: 0.20 }}>
        <View style={styles.imageContainer}>
          <Image resizeMode={"contain"} style={styles.image} source={{ uri: `${image}` }} />
        </View>
      </View>

      <View style={{ flex: 0.55 }}>
        <Text style={styles.title}>{artistName}</Text>
        <Text style={styles.subtitle}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          {tags.map((item, index) => {
            if (index > 2) return;
            return <Text style={styles.subtitle}>#{item} </Text>;
          })}
        </View>

      </View>
      <View style={{ flex: 0.25 }}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonTitle}>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


