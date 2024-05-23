import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseDetails from "../(tabs)/home/detail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const coreNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="courseDetails"
          component={CourseDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { coreNavigation };
