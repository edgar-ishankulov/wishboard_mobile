import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

function AppBar({ navigation }) {
  return (
    <NativeBaseProvider>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignSelf: "center",
          justifyContent: "flex-start",
        }}
        >
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="#6200ee" />
        <HStack
          bg="#6200ee"
          px="3"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          h={"60%"}
          >
          <HStack alignItems="center">
            <IconButton
              icon={
                <Icon size="xl" as={MaterialIcons} name="menu" color="white" />
              }
              onPress={() => navigation.openDrawer()}
              />
            <Text color="white" fontSize="20" fontWeight="bold" ml={3}>
              Wishboard
            </Text>
          </HStack>
          <HStack>
            <IconButton
              icon={
                <Icon
                as={MaterialIcons}
                name="search"
                size="xl"
                color="white"
                />
              }
              />
          </HStack>
        </HStack>
        {/* <Text style={{ flexDirection: 'column'}}>AppBar</Text> */}
      </View>
              </NativeBaseProvider>
  );
}

export default AppBar;
