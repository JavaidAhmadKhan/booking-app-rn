import { View, Text } from "react-native";
import React from "react";

export default function OurCars() {
  return (
    <View>
      <Text className="text-[#1E1E1E] text-[24px] font-bold mt-6 text-center font-[Geologica-Bold]">
        Our Cars
      </Text>
      <Text className="font-normal text-[14px] mt-6 text-[rgba(30, 30, 30, 0.5)] text-center leading-normal font-[Geologica-Regular]">
        Our mission is simple: to redefine the way you travel. We aim to provide
        a reliable, affordable, and customer-centric taxi service that exceeds
        your expectations. Whether you’re heading to the airport, running
        errands, or exploring the city, we are dedicated to getting you there on
        time and in style.
      </Text>
    </View>
  );
}
