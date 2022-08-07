import {
  VStack,
  ScrollView,
  HStack,
  Box,
  Center,
  FlatList,
  Image,
} from "native-base";
// import {  } from "react-native";
import React from "react";
import { Dimensions, View } from "react-native";
import { render } from "react-dom";
import ImageCard from "./ImageCard";
import MasonryList from "@react-native-seoul/masonry-list";

let { width: screenWidth } = Dimensions.get("window");

function Wishboard({ images }) {
  return (
    <>
      <FlatList
        data={images} numColumns={3}

        renderItem={({item, index}) => 
        <View>        
        <Image alt="item.id"  source={{ uri: item.urls.small }}  style={{height:200, width: screenWidth/3}}/>
        </View>}/>
      {/* {images.map((image, i) => (
            <Center key={i}>
            <ImageCard image={image}
            
            </Center>
          ))} */}
    </>
  );
}

export default Wishboard;
