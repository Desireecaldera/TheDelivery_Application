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
import blacksmokebglight from "../assets/images/blacksmokebglight.jpg";

const PageTwo = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={blacksmokebglight} style={{ flex: 1 }}>
      <View style={styles.page}>
        <Text
          style={{
            color: styles.text.white,
            fontWeight: styles.text.bold,
            fontSize: styles.text.textsize,
            textAlign: "center",
          }}
        >
          PURCHASE EXCLUSIVE FLOWER BEFORE ITS DRIED
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Member Plans")}
        >
          <Text
            style={{
              color: styles.text.gold,
              fontSize: styles.text.buttonsize,
              fontWeight: "bold"
            }}
          >
            {" "}
            BECOME A MEMBER{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: "dimgrey",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  text: {
    white: "white",
    gold: "gold",
    bold: "bold",
    buttonsize: 25,
    textsize: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 3,
    margin: 20, //controls gap between buttons
    width: 300,
    height: 80,
    backgroundColor: "black",
  },
});

export default PageTwo;
