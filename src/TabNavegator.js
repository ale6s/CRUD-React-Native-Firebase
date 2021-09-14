// ./navigation/TabNavigator.js

import React from "react";
import {
    NavigatorStack,
    PostNavigator,
    InboxNavigator,
    AccountNavigator,
    AddPostNavigator,
} from "./NavigatorStack.js";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            shifting={false}
        //activeColor="#fff"
        //inactiveColor="#3e2465"
        //barStyle={{ backgroundColor: "#fff" }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
                name="Home"
                component={NavigatorStack}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
                name="Inbox"
                component={InboxNavigator}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={26} />
                    ),
                }}
                name="Add Posts"
                component={AddPostNavigator}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="post" color={color} size={26} />
                    ),
                }}
                name="My Posts"
                component={PostNavigator}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
                name="Account"
                component={AccountNavigator}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
