import React from "react";
import { View, Text } from "react-native";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "700",
          color: "#000",
        }}
      >
        {title}
      </Text>
    </View>
  );
}