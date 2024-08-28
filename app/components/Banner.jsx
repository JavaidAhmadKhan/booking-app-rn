import { View, Text, Image } from "react-native";
import React from "react";

export default function Banner() {
  return (
    <View>
      <Text className="text-[#1E1E1E] text-[24px] font-bold mt-6 text-center font-[Geologica-Bold] ">
        No.1 Taxi Service In The City!
      </Text>
      <Text className="font-normal text-[14px] mt-6 text-[rgba(30, 30, 30, 0.5)] text-center leading-normal font-[Geologica-Regular]">
        Welcome to Srinagar tourist cabs where convenience meets reliability in
        the world of transportation. As a leading taxi service provider, we take
        pride in offering a seamless and efficient travel experience for our
        valued passengers.
      </Text>
      <View className="mt-6">
        <Image
          source={require("../../assets/images/slider.png")}
          className="w-full h-auto object-cover"
        />
      </View>
    </View>
  );
}
