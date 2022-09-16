import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { firebase } from "../../firebase";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Signed out successfully!");
  } catch (error) {
    console.log(error);
  }
};
const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logo}
          source={require("../../assets/Instagram.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image style={styles.icon} source={require("../../assets/np.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../../assets/messen.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: 20,
    marginTop: 4,
    resizeMode: "contain",
  },
  icons: {
    width: 32,
    height: 32,
    marginLeft: 20,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  iconpro: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 15,
  },
  unreadBadge: {
    backgroundColor: "FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontweight: "600",
  },
});

export default Header;
