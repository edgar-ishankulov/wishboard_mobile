import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Box,
  Center,
  Button,
  Image,
} from "native-base";

function Welcome() {
    return (
      <View style={{ width: "100%", marginTop: "10%" }}>
        <Center px={"10%"} mb={"3"}>
            <Text>
            This is an application that retreives photos using Unsplash API
        according to the user search inputs.
            </Text>
        </Center>
        <Center>
          <Button variant={"outline"}>
            Learn More
          </Button>
        </Center>
  </View>
)}

export default Welcome;