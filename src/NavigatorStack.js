import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen.js";
import PostsScreen from "./screens/PostsScreen.js";
import InboxScreen from "./screens/InboxScreen.js";
import AccountScreen from "./screens/AccountScreen.js";
import AddPostScreen from "./screens/AddPostScreen.js";
import UserDetailScreen from "./screens/UserDetailScreen.js";
// Navigation
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const NavigatorStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fff",
                },
                //headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Gigs Near me" }}
            />
            <Stack.Screen
                name="UserDetailScreen"
                component={UserDetailScreen}
                options={{ name: "User Detail" }}
            />
        </Stack.Navigator>
    );
};

const PostNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Posts" component={PostsScreen} />
        </Stack.Navigator>
    );
};
const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="
            Account Settings"
                component={AccountScreen}
            />
        </Stack.Navigator>
    );
};

const InboxNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="
            Inbox"
                component={InboxScreen}
            />
        </Stack.Navigator>
    );
};

const AddPostNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="
            Add Post"
                component={AddPostScreen}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export { NavigatorStack, PostNavigator, InboxNavigator, AccountNavigator, AddPostNavigator };
