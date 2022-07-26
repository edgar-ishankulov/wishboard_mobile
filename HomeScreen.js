import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";





function HomeScreen( {navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={{ flex: 4, alignItems: 'flex-start', justifyContent: 'flex-start' }}>Home Screen</Text>
      </View>
    );
  }

  export default HomeScreen