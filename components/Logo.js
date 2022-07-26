import * as React from "react";
import { View, Text } from "react-native";
import {
  Center,
  Image,
} from "native-base";

function Logo() {
    return (
      <View style={{ width: "100%" }}>
        <Center>
          <Image
            source={require("../images/logo2.png")}
            alt="Alternate Text"
            size="xl"
            mt={"5"}
            resizeMode={"contain"}
          />
        </Center>
  </View>
)}

export default Logo;