import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation/Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
