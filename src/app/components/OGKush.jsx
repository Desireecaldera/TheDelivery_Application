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
  import ogkushheader from "../assets/images/ogkushheader.png";
  
  const OGKush = () => {
    return (
      <View style={styles.page}>
        <Text
          style={{
            color: styles.text.black,
            fontWeight: styles.text.bold,
            fontSize: styles.text.textsize,
            textAlign: "center",
            
          }}
        >
          {" "}
          MORE CONTENT GOES HERE{" "}
        </Text>
    
       {/* <Image source={ogkushheader} style={{ width: 200, }} /> */}
       
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: "white",
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
  
  export default OGKush;
  