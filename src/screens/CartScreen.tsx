import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Trash2, Minus, Plus, ArrowRight, Tag, ChevronRight } from "lucide-react-native";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DiscountBanner from "../components/DiscountBanner";

import { useCartStore } from "../store/cartStore"; 

export default function CartScreen() {
  const { items, removeItem, updateQty } = useCartStore(); 


  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>

      
      <DiscountBanner onClose={() => {}} />
      <Header />

    
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 20,
        gap: 4
      }}>
        <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 14 }}>
          Home
        </Text>
        <ChevronRight size={14} color="rgba(0,0,0,0.6)" />
        <Text style={{ fontWeight: "500", fontSize: 14 }}>
          Cart
        </Text>
      </View>

      
      <Text style={{
        fontSize: 32,
        fontWeight: "900",
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 20
      }}>
        YOUR CART
      </Text>

     
      {items.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          Cart is empty 🛒
        </Text>
      )}

     
      <View style={{
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        borderRadius: 20,
        padding: 14
      }}>
        {items.map((item, index) => (
          <View
            key={item._id}
            style={{
              flexDirection: "row",
              paddingVertical: 16,
              borderBottomWidth: index === items.length - 1 ? 0 : 1,
              borderBottomColor: "rgba(0,0,0,0.1)"
            }}
          >

           
            <Image
              source={{ uri: item.image }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 12,
                backgroundColor: "#F0EEED"
              }}
            />

           
            <View style={{
              flex: 1,
              marginLeft: 12,
              justifyContent: "space-between"
            }}>
              <View>
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  {item.title}
                </Text>

                <Text style={{ fontSize: 12, marginTop: 4 }}>
                  Size: <Text style={{ color: "#666" }}>Large</Text>
                </Text>

                <Text style={{ fontSize: 12 }}>
                  Color: <Text style={{ color: "#666" }}>Default</Text>
                </Text>
              </View>

             
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  ${item.price}
                </Text>

                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#F0F0F0",
                  borderRadius: 25,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  gap: 12
                }}>
                  <TouchableOpacity
                    onPress={() =>
                      updateQty(item._id, item.quantity - 1)
                    }
                  >
                    <Minus size={16} />
                  </TouchableOpacity>

                  <Text style={{ fontWeight: "600" }}>
                    {item.quantity}
                  </Text>

                  <TouchableOpacity
                    onPress={() =>
                      updateQty(item._id, item.quantity + 1)
                    }
                  >
                    <Plus size={16} />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => removeItem(item._id)}
                style={{ marginTop: 6 }}
              >
                <Trash2 size={18} color="#FF3333" />
              </TouchableOpacity>

            </View>
          </View>
        ))}
      </View>

    
      <View style={{
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        borderRadius: 20,
        padding: 20
      }}>
        <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 20 }}>
          Order Summary
        </Text>

        <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
        <SummaryRow label="Discount" value={`-$${discount.toFixed(2)}`} valueColor="#FF3333" />
        <SummaryRow label="Delivery Fee" value={`$${delivery}`} />

        <View style={{
          height: 1,
          backgroundColor: "rgba(0,0,0,0.1)",
          marginVertical: 15
        }} />

        <SummaryRow label="Total" value={`$${total.toFixed(2)}`} isTotal />

       
        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F0F0F0",
            borderRadius: 50,
            paddingHorizontal: 16
          }}>
            <Tag size={18} color="#999" />
            <Text style={{ marginLeft: 8 }}>Promo code</Text>
          </View>

          <TouchableOpacity style={{
            backgroundColor: "#000",
            paddingHorizontal: 20,
            borderRadius: 50,
            justifyContent: "center"
          }}>
            <Text style={{ color: "#fff" }}>Apply</Text>
          </TouchableOpacity>
        </View>

        
        <TouchableOpacity style={{
          backgroundColor: "#000",
          borderRadius: 50,
          paddingVertical: 16,
          marginTop: 24,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8
        }}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            Go to Checkout
          </Text>
          <ArrowRight size={18} color="#fff" />
        </TouchableOpacity>

      </View>

     
      <Footer />

    </ScrollView>
  );
}


const SummaryRow = ({ label, value, valueColor = "#000", isTotal = false }: any) => (
  <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  }}>
    <Text style={{
      fontSize: isTotal ? 18 : 14,
      fontWeight: isTotal ? "700" : "400",
      color: "#666"
    }}>
      {label}
    </Text>

    <Text style={{
      fontSize: isTotal ? 18 : 14,
      fontWeight: "700",
      color: valueColor
    }}>
      {value}
    </Text>
  </View>
);