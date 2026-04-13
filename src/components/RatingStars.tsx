import React from "react";
import { View, Text } from "react-native";
import { Star } from "lucide-react-native";

type Props = {
  rating?: number;
  showValue?: boolean;
};

export default function RatingStars({
  rating = 4,
  showValue = true,
}: Props) {
  const safeRating = Math.round(rating);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
      
   
      <View style={{ flexDirection: "row", gap: 2 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={14}
            color={i <= safeRating ? "#FFC633" : "#E0E0E0"}
            fill={i <= safeRating ? "#FFC633" : "#E0E0E0"}
          />
        ))}
      </View>

    
      {showValue && (
        <Text style={{ fontSize: 12, fontWeight: "600", color: "#000" }}>
          {safeRating}/5
        </Text>
      )}

    </View>
  );
}