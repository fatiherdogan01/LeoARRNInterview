import * as React from "react";
import {  View, FlatList } from "react-native";
import { IData } from "../../data/IData";
import { Colors } from "../../style/Colors";

type Props = {
  data: IData,
  tabsData: Array,
  renderItem: function,
  renderTabs: function
};

const TabList = (props: Props) => {
  const { data, tabsData, renderItem, renderTabs } = props;
  return (
    <View style={{ flex: 1,backgroundColor:Colors.list_background }}>
      <View style={{ flex: 0.1  }}>
        <FlatList
          data={tabsData}
          horizontal
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={renderTabs}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ flex: 0.9 }}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={renderItem}
        />
      </View>

    </View>
  );
};
export default TabList;

