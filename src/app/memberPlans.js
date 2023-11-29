import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import stenciltwobg from "./assets/images/stenciltwobg.jpg";
const MemberPlans = () => {
  return (
    <ImageBackground source={stenciltwobg} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            height: "5%",
            width: "85%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            {" "}
            Yearly Plan Description{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          //   onPress={() => navigation.navigate("Member Plans")}
        >
          <Text
            style={{
              color: styles.text.black,
              fontSize: styles.text.buttonsize,
              fontWeight: "bold",
            }}
          >
            {" "}
            SUBSCRIBE TO YEARLY PLAN{" "}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: "10%",
            width: "85%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            {" "}
            Monthly Plan Description{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          //   onPress={() => navigation.navigate("Member Plans")}
        >
          <Text
            style={{
              color: styles.text.black,
              fontSize: styles.text.buttonsize,
              fontWeight: "bold",
            }}
          >
            {" "}
            SUBSCRIBE TO MONTHLY PLAN{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "col",
    gap: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  text: {
    white: "white",
    gold: "gold",
    black: "black",
    bold: "bold",
    tan: "yellow",
    buttonsize: 20,
    textsize: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 3,
    margin: 20, 
    width: 320,
    height: 60,
    backgroundColor: "white",
  },
});


export default MemberPlans;
