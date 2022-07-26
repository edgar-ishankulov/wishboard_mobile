import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Input,
  Box,
  Center,
  NativeBaseProvider,
  Button,
  Image,
} from "native-base";

function Search() {
  return (
    <View style={{ width: "100%" }}>

      <Box alignItems="center">
        <Input mx="3" placeholder="Search" w="75%" mt={"10%"} />
        <Button my={"3"}>Search</Button>
      </Box>
    </View>
  );
}

export default Search;
