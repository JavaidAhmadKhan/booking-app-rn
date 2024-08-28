import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

import "../global.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";

export default function _layout() {
  const [loaded, error] = useFonts({
    "Geologica-Regular": require("../assets/fonts/Geologica-Regular.ttf"),
    "Geologica-Medium": require("../assets/fonts/Geologica-Medium.ttf"),
    "Geologica-Bold": require("../assets/fonts/Geologica-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="p-4">
      <Header />
      <Banner />
      <About />
    </View>
  );
}
