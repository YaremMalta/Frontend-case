import { View, Image } from "react-native";

export default function BrandBar() {
  return (
    <View
      style={{
        height: 146,
        backgroundColor: "#000",
        justifyContent: "center",
        paddingHorizontal: 16,
      }}
    >
   
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Image source={require("../../assets/images/versace.png")} style={{ width: 116, height: 23 }} />
        <Image source={require("../../assets/images/zara.png")} style={{ width: 63, height: 26 }} />
        <Image source={require("../../assets/images/gucci.png")} style={{ width: 109, height: 25 }} />
      </View>

     
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Image source={require("../../assets/images/Prada.png")} style={{ width: 127, height: 21 }} />
        <Image source={require("../../assets/images/Calvin.png")} style={{ width: 134, height: 21 }} />
      </View>
    </View>
  );
}