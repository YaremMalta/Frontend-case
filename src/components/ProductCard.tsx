import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../types/product";
import RatingStars from "../components/RatingStars";

type Props = {
  item: Product;
};

export default function ProductCard({ item }: Props) {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
      style={{
        width: 198,
        marginBottom: 20,
      }}
    >
  
      <Image
        source={{ uri: item.image }}
        style={{
          width: 198,
          height: 200,
          borderRadius: 13.42,
        }}
        resizeMode="cover"
      />

        
      <Text
        numberOfLines={1}
        style={{
          fontSize: 16,
          fontWeight: "700",
          marginTop: 8,
          color: "#000",
        }}
      >
        {item.title}
      </Text>

     
      <View style={{ marginTop: 4 }}>
        <RatingStars rating={item.rating?.rate || 4} />
      </View>

    
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginTop: 4,
          color: "#000",
        }}
      >
        ${item.price}
      </Text>
    </Pressable>
  );
}