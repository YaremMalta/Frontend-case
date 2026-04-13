import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Menu, Search, ShoppingCart, User } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation<any>();

  
  const cartCount = 0;

  return (
    <View
      style={{
        width: "100%",
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        backgroundColor: "#fff",
      }}
    >

    
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Menu size={24} color="#000" />

        <Text style={{ fontSize: 25, fontWeight: "700", color: "#000" }}>
          SHOP.CO
        </Text>
      </View>

    
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>

        <Search size={24} color="#000" />

  
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={{ position: "relative" }}
        >
          <ShoppingCart size={24} color="#000" />

       
          {cartCount > 0 && (
            <View
              style={{
                position: "absolute",
                top: -6,
                right: -6,
                backgroundColor: "red",
                width: 16,
                height: 16,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 10, fontWeight: "700" }}>
                {cartCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <User size={24} color="#000" />
      </View>
    </View>
  );
}