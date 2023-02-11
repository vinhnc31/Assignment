import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Detail from "./Detail";
import Information from "./Information";
import ListStore from "./ListStore";
import UpdateStore from "./UpdateStore";
const homeName = "Home";
const detailName = "Detail";
const informationname = "Information";
const liststorename = "ListStore";
const updateStoername = "UpdateStore";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={detailName}
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={liststorename} component={ListStore} />
      <Stack.Screen name={updateStoername} component={UpdateStore} />
    </Stack.Navigator>
  );
}
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
              iconName = focused ? "list" : "ios-list";
            } else if (rn === informationname) {
              iconName = focused
                ? "information"
                : "ios-information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
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
          name={detailName}
          component={MyStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Information"
          component={Information}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
