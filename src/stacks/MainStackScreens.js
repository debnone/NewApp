import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PromotionScreen from "../screens/PromotionScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";


export default MainStackScreens = () => {
    const MainStack = createBottomTabNavigator();

    const tabBarOptions = {
        showLabel: false,
        style: {
            backgroundColor: "#222222",
            paddingBottom: 12
        },
    };

        const screenOptions = (({route}) => ({
            tabBarIcon: ({focused}) => {
                let iconName = "home";

                switch (route.name) {
                    case "Home":
                        iconName = "home";
                        break;
                    case "Promotion":
                        iconName = "star";
                        break;
                    case "Search":
                        iconName = "search";
                        break;
                    case "Profile":
                        iconName = "user";
                        break;

                    default:
                        iconName = "home";
                }

                return <Feather
                    name={iconName}
                    size={24}
                    color={focused ? "#ffffff" : "#666666"}
                />
            },

        }))



    return (
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Home" component={HomeScreen}/>
            <MainStack.Screen name="Promotion" component={PromotionScreen}/>
            <MainStack.Screen name="Search" component={SearchScreen}/>
            <MainStack.Screen name="Profile" component={ProfileScreen}/>
        </MainStack.Navigator>

    )
}