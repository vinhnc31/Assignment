import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import Datail from "./Detail";
import Information from "./Information";

const homeName = "Home";
const detailName = "Detail";
const informationname = "Information";
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === informationname) {
              iconName = focused ? "user" : "user-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          name={homeName}
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Detail"
          component={Datail}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Infomation"
          component={Information}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
