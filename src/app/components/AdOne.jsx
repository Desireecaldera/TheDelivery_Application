import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import PagerView from "react-native-pager-view";
import fivewhitestar from "../assets/images/fivewhitestar.png";

const AdOne = () => {
  return (
    <View style={styles.page}>
      <Text
        style={{
          color: styles.text.white,
          fontWeight: styles.text.bold,
          fontSize: styles.text.textsize,
          textAlign: "center",
          
        }}
      >
        {" "}
        RATED #1 FRESHEST AND TASTIEST FLOWER IN LA AND ORANGE COUNTY{" "}
      </Text>
     <View style={{ paddingTop: 10 }}>
     <Image source={fivewhitestar} style={{ width: 200, }} />
     </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
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
});

export default AdOne;
