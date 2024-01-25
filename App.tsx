import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Image
          source={require("./src/assets/ferraz-logo.png")}
          style={styles.image}
        />
        <Routes/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    marginLeft: 90,
    marginTop: 50,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  text: {
    textAlign: "center",
    color: 'blue',
    fontSize: 20,
    fontWeight: "bold",
  }
})