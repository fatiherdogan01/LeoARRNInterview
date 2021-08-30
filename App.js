import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import MusicListScreen from "./src/screens/MusicListScreen";
import { Colors } from "./src/style/Colors";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.header_gray}
        barStyle={"dark-content"}
      />
      <MusicListScreen />
    </SafeAreaView>
  );
};

export default App;
