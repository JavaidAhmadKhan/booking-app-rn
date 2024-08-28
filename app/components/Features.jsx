import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Safety from "../../assets/images/safety.png";
import Price from "../../assets/images/price.png";
import Payment from "../../assets/images/payment.png";
import Customer from "../../assets/images/customer.png";
import React from "react";

const DATA = [
  {
    id: "1",
    title: "Saftey Secure",
    img: Safety,
  },
  {
    id: "2",
    title: "Competative Price",
    img: Price,
  },
  {
    id: "2",
    title: "Multiple Payment",
    img: Payment,
  },
  {
    id: "4",
    title: "Customer Services",
    img: Customer,
  },
];

const Item = ({ title, img }) => (
  <View className="p-4 my-2 mx-4 bg-green-200  flex flex-1 items-center justify-center rounded-xl mt-6">
    <Image source={img} className="w-18 h-18 object-center object-cover " />
    <Text className="text-sm font-medium mt-4 font-[Geologica-Regular]  ">
      {title}
    </Text>
  </View>
);
export default function Features() {
  return (
    <View>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <Item title={item.title} img={item.img} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
