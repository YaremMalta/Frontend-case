import { Pressable, Text } from "react-native";

export default function ViewAllButton() {
  return (
    <Pressable
      style={{
        marginTop: 20,
        marginHorizontal: 16,
        height: 46,
        borderRadius: 62,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: "#000",
        }}
      >
        View All
      </Text>
    </Pressable>
  );
}