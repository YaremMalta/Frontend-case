import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { useProducts } from "../services/useProducts";

import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import BrandBar from "../components/BrandBar";
import SectionTitle from "../components/SectionTitle";
import MiddleTitle from "../components/MiddleTitle";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
import DiscountBanner from "../components/DiscountBanner";
import ViewAllButton from "../components/ViewAllButton";
import CustomerReview from "../components/CustomerReview";

export default function HomeScreen() {
  const { data, isLoading, error } = useProducts();
  const [showBanner, setShowBanner] = useState(true);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  const firstTwo = data?.slice(0, 2) || [];
  const secondTwo = data?.slice(2, 4) || [];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>

     
      {showBanner && (
        <DiscountBanner onClose={() => setShowBanner(false)} />
      )}

     
      <Header />

      
      <HeroBanner />

      
      <BrandBar />

     
      <SectionTitle title="NEW ARRIVALS" />
      <ViewAllButton />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginTop: 10,
        }}
      >
        {firstTwo.map((item: any) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </View>

   
      <MiddleTitle title="TOP SELLING" />
      <ViewAllButton />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginTop: 10,
        }}
      >
        {secondTwo.map((item: any) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </View>

      <CategorySection />

      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
          marginTop: 30,
        }}
      >
       
        <Text
          style={{
            fontSize: 20,
            fontWeight: "900",
            color: "#000",
          }}
        >
          OUR HAPPY CUSTOMERS
        </Text>

       
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Text style={{ fontSize: 18 }}>←</Text>
          <Text style={{ fontSize: 18 }}>→</Text>
        </View>
      </View>

     
      <CustomerReview offset={0} limit={1} />

      
      <Footer />
    </ScrollView>
  );
}