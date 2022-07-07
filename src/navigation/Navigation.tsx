import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pokedex from "../screens/Pokedex";
import Acount from "../screens/Acount";
import Favorite from "../screens/Favorite";
import Icon from "react-native-vector-icons/FontAwesome";
import { ColorValue, Image } from "react-native";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Acount"
        component={Acount}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const renderPokeball = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 80,
        height: 80,
        top: -20,
      }}
    ></Image>
  );
};
