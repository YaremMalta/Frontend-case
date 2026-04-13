import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Star, Minus, Plus } from "lucide-react-native";

import Header from "../components/Header";
import DiscountBanner from "../components/DiscountBanner";
import Footer from "../components/Footer";
import CustomerReview from "../components/CustomerReview";
import RecommendedProducts from "../components/RecommendedProducts";

import { useCartStore } from "../store/cartStore"; 

export default function ProductDetailScreen() {
  const route = useRoute();
  const { product } = route.params as { product: any };

  const addToCart = useCartStore((state) => state.addToCart); 

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState("reviews");

  const rating = Math.round(product?.rating?.rate || 4);

  const colors = ["#4F4631", "#314F4A", "#31344F"];

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      
     
      <DiscountBanner onClose={() => {}} />
      <Header />

     
      <View style={{ padding: 16 }}>
        <View
          style={{
            height: 300,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
      </View>

     
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 26, fontWeight: "900" }}>
          {product.title}
        </Text>

       
        <View style={{ flexDirection: "row", gap: 2, marginTop: 6 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={16}
              color={i <= rating ? "#FFC633" : "#E0E0E0"}
              fill={i <= rating ? "#FFC633" : "#E0E0E0"}
            />
          ))}
          <Text style={{ marginLeft: 6 }}>{rating}/5</Text>
        </View>

        
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            marginTop: 10,
          }}
        >
          ${product.price}
        </Text>

      
        <Text style={{ marginTop: 10, color: "#666" }}>
          {product.description}
        </Text>

       
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 12, color: "#666" }}>
            Select Colors
          </Text>

          <View style={{ flexDirection: "row", gap: 16 }}>
            {colors.map((color, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectedColor(i)}
                style={{
                  width: 37,
                  height: 37,
                  borderRadius: 20,
                  backgroundColor: color,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedColor === i && (
                  <Text style={{ color: "#fff", fontWeight: "900" }}>
                    ✓
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

     
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 10, color: "#666" }}>
            Choose Size
          </Text>

          <View style={{ flexDirection: "row", gap: 12 }}>
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <View
                key={size}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 62,
                  backgroundColor: size === "Large" ? "#000" : "#F0F0F0",
                }}
              >
                <Text
                  style={{
                    color: size === "Large" ? "#fff" : "#666",
                  }}
                >
                  {size}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      
      <View style={{ padding: 16, flexDirection: "row", gap: 12 }}>
        
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F0F0F0",
            borderRadius: 25,
            paddingHorizontal: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus size={20} />
          </TouchableOpacity>

          <Text style={{ fontWeight: "700" }}>{quantity}</Text>

          <TouchableOpacity onPress={() => setQuantity((q) => q + 1)}>
            <Plus size={20} />
          </TouchableOpacity>
        </View>

       
        <TouchableOpacity
          onPress={() => {
            addToCart(product, quantity); 
          }}
          style={{
            flex: 2,
            backgroundColor: "#000",
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>

   
      <View style={{ marginHorizontal: 16, marginTop: 10 }}>
        <TouchableOpacity onPress={() => setActiveTab("reviews")}>
          <Text style={{ fontWeight: activeTab === "reviews" ? "700" : "400" }}>
            Rating & Reviews
          </Text>
        </TouchableOpacity>

        {activeTab === "reviews" && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "700" }}>
                All Reviews (451)
              </Text>

              <View
                style={{
                  backgroundColor: "#000",
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>
                  Write a Review
                </Text>
              </View>
            </View>

            <CustomerReview offset={1} limit={2} />
          </>
        )}
      </View>

   
      <RecommendedProducts />

    
      <Footer />
    </ScrollView>
  );
}