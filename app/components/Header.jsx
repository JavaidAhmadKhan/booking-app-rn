import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between">
      <Image
        source={require("../../assets/images/logo.png")}
        className="w-18 h-18 object-cover"
      />
      <MaterialCommunityIcons name="hamburger" size={24} color="green" />
    </View>
  );
}
