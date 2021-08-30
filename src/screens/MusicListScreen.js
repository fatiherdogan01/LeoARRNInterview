import React from "react";
import { View } from "react-native";
import { Header } from "../components/Header";
import TabList from "../components/TabList";
import { data } from "../data/Data";
import { useState } from "react";
import { returnDataUniqueArray, returnDataWithoutKeys } from "../helpers/ConvertDataHelpers";
import { ListCard } from "../components/ListCard";
import { Tabs } from "../components/Tabs";

let convertedData = returnDataWithoutKeys(data);
const tabsData = ["All", ...returnDataUniqueArray(data)];

const MusicListScreen = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listData, setListData] = useState(convertedData);


  function onChange(item, index) {
    const filteredData = convertedData.filter(d => d.tags.some((c => item === "All" || c.includes(item))));
    setListData(filteredData);
    setCurrentIndex(index);
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title={"Choose Music"} />

      <View style={{ flex: 1 }}>
        <TabList
          data={listData}
          tabsData={tabsData}
          renderTabs={({ item, index }) =>
            <Tabs
              onChange={() => onChange(item, index)}
              isActive={currentIndex === index}
              item={item} />
          }
          renderItem={({ item }) =>
            <ListCard
              artistName={item.artistName}
              name={item.name}
              image={item.thumbUrl}
              tags={item.tags} />
          }
        />
      </View>

    </View>
  );
};

export default MusicListScreen;
