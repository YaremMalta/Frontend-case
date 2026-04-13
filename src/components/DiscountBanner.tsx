import { View, Text, Pressable } from "react-native";

export default function DiscountBanner({ onClose }: { onClose: () => void }) {
  return (
    <View
      style={{
        width: "100%",
        height: 34,
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 9,
        gap: 10,
      }}
    >
      
      <Text
        style={{
          color: "#fff",
          fontSize: 12,
          fontWeight: "400",
          lineHeight: 12,
        }}
      >
        Sign up and get 20% off to your first order.{" "}

       
        <Text
          style={{
            fontWeight: "500",
            textDecorationLine: "underline",
            fontSize: 12,
          }}
        >
          Sign Up Now
        </Text>
      </Text>

     
      <Pressable onPress={onClose}>
        <Text style={{ color: "#fff", fontSize: 14 }}>✕</Text>
      </Pressable>
    </View>
  );
}