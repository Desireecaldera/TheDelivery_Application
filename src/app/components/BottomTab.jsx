import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomButton = () => {
  const navigation = useNavigation();
  return (
    //  <View styles={{ height: "80%",alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center",width: "100%", height: "9%",backgroundColor: "black"}}
        onPress={() => navigation.navigate("Member Plans")}
      >
        <Text
          style={{
            color: styles.text.white,
            fontSize: styles.text.textsize,
            fontWeight: "bold",
          }}
        >
          {" "}
          BECOME A MEMBER HERE{" "}
        </Text>
      </TouchableOpacity>
    //  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    white: "white",
    gold: "gold",
    black: "black",
    bold: "bold",
    buttonsize: 25,
    textsize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
  // button: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 5,
  //   elevation: 3,
  //   margin: 20, //controls gap between buttons
  //   width: 300,
  //   height: 80,
  //   backgroundColor: "black",
  // },
});

export default BottomButton;
