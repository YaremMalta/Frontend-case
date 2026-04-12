import { View, Text, FlatList, Image } from "react-native";
import { useProducts } from "../services/useProducts";

export default function HomeScreen() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  return (
 <FlatList
  data={data ?? []}
  keyExtractor={(item) => item._id.toString()}
  renderItem={({ item }) => (
    <View style={{ margin: 10 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 100, height: 100 }}
      />

      <Text>{item.title}</Text>
      <Text>{item.price} $</Text>
    </View>
  )}
/>
  );
}