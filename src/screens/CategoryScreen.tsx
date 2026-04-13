import React, { useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ChevronRight, ChevronLeft, SlidersHorizontal } from "lucide-react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { useProducts } from "../services/useProducts";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DiscountBanner from "../components/DiscountBanner";

export default function CategoryScreen() {
  const { data, isLoading, error } = useProducts();
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const category = route.params?.category || "Casual";

  
  const products = useMemo(() => {
    if (!data) return [];
    return [...data]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  }, [data]);

 
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>

      
      <DiscountBanner onClose={() => {}} />
      <Header />

   
      {isLoading && (
        <Text style={{ padding: 20 }}>Loading...</Text>
      )}

      {error && (
        <Text style={{ padding: 20 }}>Error loading products</Text>
      )}

      {!isLoading && !error && (
        <>
          
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            marginTop: 20,
            gap: 4,
          }}>
            <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 14 }}>
              Home
            </Text>
            <ChevronRight size={14} color="rgba(0,0,0,0.6)" />
            <Text style={{ fontWeight: "500", fontSize: 14 }}>
              {category}
            </Text>
          </View>

       
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginTop: 20,
            alignItems: "center",
          }}>
            <View>
              <Text style={{ fontSize: 28, fontWeight: "900" }}>
                {category}
              </Text>
              <Text style={{ fontSize: 12, color: "rgba(0,0,0,0.6)" }}>
                Showing {products.length} Products
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Filters")}
              style={{
                backgroundColor: "#F0F0F0",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <SlidersHorizontal size={18} color="black" />
            </TouchableOpacity>
          </View>

          
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginTop: 20,
          }}>
            {products.map((item: any) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </View>

        
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            marginTop: 20,
            borderTopWidth: 1,
            borderTopColor: "rgba(0,0,0,0.1)",
          }}>
            <TouchableOpacity style={{ flexDirection: "row", gap: 4 }}>
              <ChevronLeft size={18} />
              <Text>Previous</Text>
            </TouchableOpacity>

            <Text style={{ fontWeight: "700" }}>1 ... 10</Text>

            <TouchableOpacity style={{ flexDirection: "row", gap: 4 }}>
              <Text>Next</Text>
              <ChevronRight size={18} />
            </TouchableOpacity>
          </View>

         
          <Footer />
        </>
      )}
    </ScrollView>
  );
}