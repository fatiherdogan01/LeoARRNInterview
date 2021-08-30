import React from "react";
import { SafeAreaView } from "react-native";
import MusicListScreen from "./src/screens/MusicListScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MusicListScreen />
    </SafeAreaView>
  );
};

export default App;
