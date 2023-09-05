import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {registerRootComponent} from 'expo';

export default function App() {
  return (
    <View className="flex justify-center items-center h-full">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

registerRootComponent(App);
