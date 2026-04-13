import React from "react";
import { View, Text } from "react-native";
import { Star } from "lucide-react-native";
import { reviews } from "../data/reviews";

type Props = {
  offset?: number;
  limit?: number;
};

export default function CustomerReview({
  offset = 0,
  limit = 3,
}: Props) {
  const visibleReviews = reviews.slice(offset, offset + limit);

  return (
    <View style={{ marginHorizontal: 16, marginTop: 20 }}>
      {visibleReviews.map((item) => (
        <View
          key={item.id}
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 16,
            marginBottom: 12,
          }}
        >
        
          <View style={{ flexDirection: "row", marginBottom: 6 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                color={i <= 4 ? "#FFC633" : "#E0E0E0"}
                fill={i <= 4 ? "#FFC633" : "#E0E0E0"}
              />
            ))}
          </View>

    
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "700", fontSize: 14 }}>
              {item.name}
            </Text>

         
            <View
              style={{
                marginLeft: 6,
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: "#22C55E",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 10 }}>
                ✓
              </Text>
            </View>
          </View>

      
          <Text
            style={{
              marginTop: 6,
              fontSize: 13,
              color: "#555",
              lineHeight: 18,
            }}
          >
            {item.text}
          </Text>

          
          <Text
            style={{
              marginTop: 10,
              fontSize: 11,
              color: "#999",
            }}
          >
            {item.date}
          </Text>
        </View>
      ))}
    </View>
  );
}