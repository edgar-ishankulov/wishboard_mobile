import * as React from "react";
import { View } from "react-native";
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
  Pressable,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../HomeScreen";

function CustomDrawerContent(props) {
  return (
    <NativeBaseProvider>
      <DrawerContentScrollView {...props} safeArea>
        <VStack space="6" my="2" mx="1">
          <Box px="4">
            <Text bold color="gray.700">
              Mail
            </Text>
            <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
              john_doe@gmail.com
            </Text>
          </Box>
        </VStack>
        <VStack space="3">
          <Pressable
            px="5"
            py="3"
            rounded="md"
            onPress={(event) => {
              props.navigation.navigate("Home");
            }}
          ><Text>Home</Text></Pressable>
        </VStack>
        <VStack space="3">
          <Pressable
            px="5"
            py="3"
            rounded="md"
            onPress={(event) => {
              props.navigation.navigate("Home");
            }}
          ><Text>My Wishboard</Text></Pressable>
        </VStack>
      </DrawerContentScrollView>
    </NativeBaseProvider>
  );
}

export default CustomDrawerContent;
