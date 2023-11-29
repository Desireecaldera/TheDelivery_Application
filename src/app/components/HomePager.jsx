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

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

const HomePager = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <PageOne />
      </View>
      <View key="2">
        <PageTwo />
      </View>
      <View key="3">
        <PageThree />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    backgroundColor: "gray",
  },
});

export default HomePager;
