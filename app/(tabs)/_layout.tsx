import React from 'react';
import { Image, useColorScheme } from 'react-native';
import { Tabs } from 'expo-router';
import Icons from '@/constants/Icons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => (
            <Image
              source={Icons.chat_icon}
              style={{
                height: 32,
                width: 32,
                tintColor: focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={Icons.profile_icon}
              style={{
                height: 32,
                width: 32,
                tintColor: focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
