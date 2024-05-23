import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Stack } from "expo-router";

export default function Layout({ title }) {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#161622",
          color: "#FFD700",
        },
        headerTintColor: "#FFD700",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="detail" options={{ headerTitle: "Details" }} />
    </Stack>
  );
}
