import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { openBrowserAsync } from 'expo-web-browser';

export default function MessageScreen() {

  // Screen Navigation start
  const navigation = useNavigation()

  const handleMenu = () => {
      navigation.navigate('Menu');
  };
  // Screen Navigation end

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress= {handleMenu}>
            <Image source = {require('../assets/menu.png')} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Message
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text>This screen is under construction{"\n"}</Text>
        <View>
          <TouchableOpacity onPress= {() => openBrowserAsync("http://localhost:5174/")}>
            <View style={styles.imageContainer}>
            <Image source = {require('../assets/building.png')} style={styles.image}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  // Header Container start
  header: {
    width: '100%',
    height: 47,
    marginBottom: 10,
    backgroundColor: '#d5212b',
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuContainer: {
    width: 35,
    height: 35,
    margin: 5,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  headingContainer: {
    paddingLeft: 80
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  // Header Container end
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 70,
    height: 70,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})