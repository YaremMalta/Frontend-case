import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Mail } from "lucide-react-native";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

export default function Footer() {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      
      
      <View 
        style={{
          backgroundColor: "#000",
          marginHorizontal: 16,
          borderRadius: 20,
          padding: 24,
          zIndex: 10,
          marginBottom: -140,
        }}
      >
        <Text style={{ 
          color: "#fff", 
          fontSize: 32, 
          fontWeight: "900", 
          lineHeight: 35,
          marginBottom: 32 
        }}>
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </Text>

        <View style={{ gap: 12 }}>
         
          <View style={{ 
            flexDirection: "row", 
            alignItems: "center", 
            backgroundColor: "#fff", 
            borderRadius: 50, 
            paddingHorizontal: 16, 
            paddingVertical: 12 
          }}>
            <Mail size={20} color="rgba(0,0,0,0.4)" />
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor="rgba(0,0,0,0.4)"
              style={{ marginLeft: 10, flex: 1, color: "#000" }}
            />
          </View>

         
          <TouchableOpacity style={{ 
            backgroundColor: "#fff", 
            borderRadius: 50, 
            paddingVertical: 12, 
            alignItems: "center" 
          }}>
            <Text style={{ color: "#000", fontWeight: "700", fontSize: 16 }}>
              Subscribe to Newsletter
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    
      <View style={{ 
        backgroundColor: "#F0F0F0", 
        paddingHorizontal: 16, 
        paddingTop: 160, 
        paddingBottom: 40 
      }}>
        
        
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 30, fontWeight: "900", marginBottom: 16 }}>
            SHOP.CO
          </Text>
          <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 14, lineHeight: 22 }}>
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </Text>
          
          <View style={{ flexDirection: "row", gap: 12, marginTop: 20 }}>
           
            <SocialIcon 
              icon={<FontAwesome name="twitter" size={18} color="black" />} 
              bg="#fff" 
            />
        
            <SocialIcon 
              icon={<FontAwesome name="facebook" size={18} color="white" />} 
              bg="#000" 
            />
          
            <SocialIcon 
              icon={<AntDesign name="instagram" size={18} color="black" />} 
              bg="#fff" 
            />
         
            <SocialIcon 
              icon={<Feather name="github" size={18} color="black" />} 
              bg="#fff" 
            />
          </View>
        </View>

       
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <FooterLinks title="COMPANY" items={['About', 'Features', 'Works', 'Career']} />
          <FooterLinks title="HELP" items={['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']} />
          <FooterLinks title="FAQ" items={['Account', 'Manage Deliveries', 'Orders', 'Payment']} />
          <FooterLinks title="RESOURCES" items={['Free eBook', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']} />
        </View>

        
        <View style={{ 
          borderTopWidth: 1, 
          borderTopColor: "rgba(0,0,0,0.1)", 
          marginTop: 24, 
          paddingTop: 24, 
          alignItems: "center" 
        }}>
          <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 14, marginBottom: 16 }}>
            Shop.co © 2000-2023, All Rights Reserved
          </Text>
          
    
          <View style={{ flexDirection: "row", gap: 8 }}>
            {['Visa', 'Master', 'Paypal', 'Apple', 'GPay'].map((item) => (
              <View key={item} style={{ 
                backgroundColor: "#fff", 
                paddingHorizontal: 10, 
                paddingVertical: 4, 
                borderRadius: 6, 
                borderWidth: 1, 
                borderColor: "rgba(0,0,0,0.05)" 
              }}>
                <Text style={{ fontSize: 10, fontWeight: "700" }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


const SocialIcon = ({ icon, bg }: { icon: any, bg: string }) => (
  <View style={{
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: bg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)"
  }}>
    {icon}
  </View>
);

const FooterLinks = ({ title, items }: { title: string, items: string[] }) => (
  <View style={{ width: "50%", marginBottom: 24 }}>
    <Text style={{ fontWeight: "700", fontSize: 14, letterSpacing: 3, marginBottom: 16 }}>
      {title}
    </Text>
    {items.map((item) => (
      <TouchableOpacity key={item} style={{ marginBottom: 12 }}>
        <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 16 }}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
);