import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import HomeScreen from "../HomeScreen";
import AppBar from "./AppBar";

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen key={"Home"} name="Home" component={HomeScreen} />
      <Drawer.Screen key={"AppBar"} name="AppBar" component={AppBar} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
