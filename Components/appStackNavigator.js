import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import ExchangerDetailsScreen from "../Screens/exchangerDetailsScreen";
import HomeScreen from "../Screens/homeScreen";

export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    ExchangerDetails: {
      screen: ExchangerDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);


