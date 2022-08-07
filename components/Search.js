import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Input,
  Box,
  Center,
  NativeBaseProvider,
  Button,
  Image,
  FormControl
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { setWord } from "../redux/wordSlice";

function Search({handleSearchSubmit, isLoading}) {
  const word = useSelector((state) => state.setWord.word);
  const dispatch = useDispatch();
  const setText = useDispatch(setWord())
  console.log(word);
  return (
    <View style={{ width: "100%" }}>

      <Box alignItems="center">
        <FormControl>
<Center>

        <Input mx="3" placeholder="Search" w="75%" mt={"1%"} onChange={(event) => dispatch(setWord(event.target.value))} value={word} onChangeText={(value) => dispatch(setWord(value))} />
</Center>
        <Center>

        <Button my={"3"} w="60%"  onPress={handleSearchSubmit}>Search</Button>
        </Center>
        </FormControl>
      </Box>
    </View>
  );
}

export default Search;
