import React, { useMemo } from "react";
import { View, Text, Image } from "react-native";
import { Star } from "lucide-react-native";
import { useProducts } from "../services/useProducts";

export default function RecommendedProducts() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;


  const products = useMemo(() => {
    if (!data) return [];
    return [...data].sort(() => Math.random() - 0.5).slice(0, 2);
  }, [data]);

  return (
    <View style={{ marginHorizontal: 16, marginTop: 30 }}>
      
   
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        YOU MIGHT ALSO LIKE
      </Text>

     
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        
        {products.map((item: any) => (
          <View key={item._id} style={{ width: 180 }}>
            
           
            <View
              style={{
                backgroundColor: "#F0EEED",
                borderRadius: 16,
                height: 180,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"  
              />
            </View>

           
            <Text
              numberOfLines={1}
              style={{
                fontWeight: "700",
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              {item.title}
            </Text>

           
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <Star size={14} color="#FFC633" fill="#FFC633" />
              <Text style={{ fontSize: 12 }}>
                {item.rating?.rate ?? 4}/5
              </Text>
            </View>

            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginTop: 4,
              }}
            >
              ${item.price}
            </Text>

          </View>
        ))}
      </View>
    </View>
  );
}