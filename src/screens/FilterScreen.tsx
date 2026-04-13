import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { X, ChevronUp, Check } from "lucide-react-native";

export default function FilterScreen() {
  const colors = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06BDF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#000000",
    "#FFFFFF",
  ];

  const sizes = [
    ["XX-Small", "X-Small", "Small"],
    ["Medium", "Large", "X-Large"],
    ["XX-Large", "3X-Large", "4X-Large"],
  ];

  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        
        <View
          style={{
            marginTop: 13,
            marginHorizontal: 16,
          }}
        >
       
          <View
            style={{
              height: 2,
              backgroundColor: "#eee",
              borderRadius: 100,
              marginBottom: 13,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "700" }}>Filters</Text>
            <TouchableOpacity>
              <X size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 20,
            borderBottomWidth: 1,
            borderColor: "#eee",
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Colors</Text>
            <Text>{"˄"}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {colors.map((c, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 20,
                  backgroundColor: c,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: c === "#FFFFFF" ? 1 : 0,
                  borderColor: "#ddd",
                }}
              >
                {i === 1 && <Check size={14} color="white" />}
              </TouchableOpacity>
            ))}
          </View>
        </View>

       
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Price</Text>
            <Text>{"˄"}</Text>
          </View>

        
          <View
            style={{
              height: 4,
              backgroundColor: "#eee",
              borderRadius: 50,
              position: "relative",
            }}
          >
            <View
              style={{
                position: "absolute",
                left: "20%",
                right: "25%",
                height: 4,
                backgroundColor: "black",
                borderRadius: 50,
              }}
            />

            <View
              style={{
                position: "absolute",
                left: "20%",
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: "black",
                top: -5,
              }}
            />

            <View
              style={{
                position: "absolute",
                right: "25%",
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: "black",
                top: -5,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text>$50</Text>
            <Text>$200</Text>
          </View>
        </View>

        
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Size</Text>
            <Text>{"˄"}</Text>
          </View>

          {sizes.map((row, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                gap: 12,
                marginBottom: 12,
              }}
            >
              {row.map((s, j) => {
                const selected = s === "Large";

                return (
                  <View
                    key={j}
                    style={{
                      width: 96,
                      height: 39,
                      borderRadius: 62,
                      backgroundColor: selected ? "#000" : "#F0F0F0",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: selected ? "#fff" : "#666",
                      }}
                    >
                      {s}
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>

       
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: "#eee",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Dress Style
            </Text>
            <Text>{"˄"}</Text>
          </View>

          {dressStyles.map((d, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: "#666" }}>{d}</Text>
              <Text>{">"}</Text>
            </View>
          ))}
        </View>

        
        <View style={{ padding: 16 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              paddingVertical: 16,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>
              Apply Filters
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}