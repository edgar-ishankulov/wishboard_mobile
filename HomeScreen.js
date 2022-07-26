import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Box, Center, NativeBaseProvider } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "react-native-axios";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";

const API_URL=process.env.REACT_APP_API_URL


function HomeScreen( {navigation }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [word, setWord] = useState('')
  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      res.data.check = 'false';
      setImages([...res.data]);
      setIsLoading(false);
    } catch (error) {
      if (error.response.status == 400) {
        setIsLoading(false);
        setBadQuery(true);
      }
    }
   setWord('');
  };

    return (
 <NativeBaseProvider>
<Logo></Logo>
   <Search handleSearchSubmit={handleSearchSubmit} isLoading={isLoading}></Search>
   <Welcome></Welcome>
 </NativeBaseProvider>
    );
  }

  export default HomeScreen