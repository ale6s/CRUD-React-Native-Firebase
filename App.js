import React from "react";
import { StyleSheet } from "react-native";
//import NavigatorStack from "./src/NavigatorStack.js";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/TabNavegator.js";





function App() {

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App
