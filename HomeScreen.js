import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Box, Center, NativeBaseProvider } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Wishboard from "./components/Wishboard";
import { REACT_APP_API_URL } from "@env";
import { setWord } from "./redux/wordSlice";


const API_URL = REACT_APP_API_URL;

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const word = useSelector((state) => state.setWord.word);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      res.data.check = "false";
      setImages([...res.data]);
      setIsLoading(false);
      console.log(res.data);
    } catch (error) {
      if (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    dispatch(setWord(""));
  };
  console.log(word);

  return (
    <NativeBaseProvider>
      <Logo></Logo>
      <Search
        handleSearchSubmit={handleSearchSubmit}
        isLoading={isLoading}
        
      ></Search>
      {images.length ? (
        <>
          <Wishboard
            images={images}
          />
        
        </>
      ) : (
        <Welcome />
      )}
    </NativeBaseProvider>
  );
}

export default HomeScreen;
