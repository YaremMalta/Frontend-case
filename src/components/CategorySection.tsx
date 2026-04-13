import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategorySection() {
  const navigation = useNavigation<any>();

  const categories = [
    {
      name: "Casual",
      img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    },
    {
      name: "Formal",
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
    {
      name: "Party",
      img: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg",
    },
    {
      name: "Gym",
      img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    },
  ];

  return (
    <View
      style={{
        marginHorizontal: 16,
        marginTop: 24,
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        padding: 16,
      }}
    >
      
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 16,
          color: "#000",
        }}
      >
        BROWSE BY DRESS STYLE
      </Text>

      
      <View style={{ gap: 12 }}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("Category", {
                category: item.name,
              })
            }
            style={{
              height: 120,
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
            }}
          >
            
            <Image
              source={{ uri: item.img }}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="cover"
            />

           
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.25)",
              }}
            />

           
            <Text
              style={{
                position: "absolute",
                left: 12,
                top: 12,
                fontSize: 18,
                fontWeight: "700",
                color: "#fff",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}