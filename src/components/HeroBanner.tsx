import { View, Text, Pressable, Image } from "react-native";

export default function HeroBanner() {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#F2F0F1",
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 20,
      }}
    >
   
      <Text
        style={{
          fontSize: 36,
          fontWeight: "700",
          color: "#000",
          lineHeight: 34,
        }}
      >
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </Text>

     
      <Text
        style={{
          marginTop: 12,
          fontSize: 14,
          color: "#000",
          opacity: 0.6,
          lineHeight: 20,
        }}
      >
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of style.
      </Text>

    
      <Pressable
        style={{
          marginTop: 20,
          width: "100%",
          height: 52,
          borderRadius: 62,
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          Shop Now
        </Text>
      </Pressable>

    
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#000",
          opacity: 0.1,
          marginVertical: 20,
        }}
      />

   
      <View style={{ alignItems: "center" }}>
        
    
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>200+</Text>
            <Text style={{ fontSize: 12, opacity: 0.6 }}>
              International Brands
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>2,000+</Text>
            <Text style={{ fontSize: 12, opacity: 0.6 }}>
              High-Quality Products
            </Text>
          </View>
        </View>

      
        <View
          style={{
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            30,000+
          </Text>
          <Text style={{ fontSize: 12, opacity: 0.6 }}>
            Happy Customers
          </Text>
        </View>
      </View>

   
      <Image
        source={{
          uri: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
        }}
        style={{
          width: "100%",
          height: 448,
          marginTop: 20,
        }}
        resizeMode="cover"
      />
    </View>
  );
}