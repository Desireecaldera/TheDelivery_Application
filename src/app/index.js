import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./homeScreen";
import MemberPlans from "./memberPlans";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: ({}) => (
                <View
                  style={{
                    height: 65,
                    backgroundColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
                  >
                    {" "}
                    THE DELIVERY{" "}
                  </Text>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Member Plans"
            component={MemberPlans}
            options={{
                title: "MEMBERSHIP PLANS",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTitleAlign: "center",
            //   headerLargeTitle: false,
            //   headerLargeTitleStyle:{
            //     color: "white",
            //     fontWeight: "bold",
            //     fontSize: 20,
            //   },
              headerTintColor: "white"
            //   headerLeft: ({navigation}) => (
            //     <Button
            //       onPress={() => navigation.navigate('Home')}
            //       title="back"
            //       color="white"
                  
            //     />
            //   ),
            //   headerTitleStyle:{
            //     color: "white",
            //     fontWeight: "bold",
            //     fontSize: 5
            //   },
            //   
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
