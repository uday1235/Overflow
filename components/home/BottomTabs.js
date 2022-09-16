import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/000000/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/000000/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/000000/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/000000/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/000000/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/000000/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/000000/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/000000/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active: "http://www.swanslake.in/images/profile.png",
    inactive: "http://www.swanslake.in/images/profile.png",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 19,
  },
});

export default BottomTabs;
