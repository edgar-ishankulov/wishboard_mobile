import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Box, Center, NativeBaseProvider } from "native-base";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";





function HomeScreen( {navigation }) {
    return (
 <NativeBaseProvider>
<Logo></Logo>
   <Search></Search>
   <Welcome></Welcome>
 </NativeBaseProvider>
    );
  }

  export default HomeScreen