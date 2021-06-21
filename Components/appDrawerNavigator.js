import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./appTabNavigator";
import CustomSideBarMenu from "./customSideBarMenu";
import MyExchangesScreen from "../Screens/myExchangesScreen";
import NotificationScreen from "../Screens/notificationScreen";
import SettingScreen from "../Screens/settingScreen"

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    MyExchanges: { screen: MyExchangesScreen },
    Notifications: { screen: NotificationScreen },
    MyProfile: { screen: SettingScreen },
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: "Home" }
);