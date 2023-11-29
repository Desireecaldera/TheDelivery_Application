import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomePager from "./components/HomePager";
import AdOne from "./components/AdOne";
import OGKush from "./components/OGKush";
import BottomButton from "./components/BottomTab";


const Home = () => {
// const windowHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
        <ScrollView
        // showsVerticalScrollIndicator={true}
        // pagingEnabled={true}
        // nestedScrollEnabled={true}

        // style={{ paddingVertical: 0, flex: 2 }}
        // automaticallyAdjustContentInsets={true}
        // // scrollEnabled={true}
        // // nestedScrollEnabled={true}
        // // style = {{flex: 1}}
        contentContainerStyle={{ flexGrow: 1 , flex: 1 }}
        >
          <View style={{ height: "60%" }}>
            <HomePager />
          </View>

          <View style={{ height: "40%" }}>
            <AdOne />
          </View>

          <View style={{ height: "40%" }}>
            <OGKush />
          </View>

        </ScrollView>
        <BottomButton/>
    </SafeAreaView>
  );
};

export default Home;

//need to figure out how to implement different UI scrolls on the same page
