import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MenuScreen() {

  // Screen Navigation start
  const navigation = useNavigation()

    const handleBrowse = () => {
        navigation.navigate('Browse');
    };
    const handleAbout = () => {
    navigation.navigate('About');
    };
    const handleMap = () => {
    navigation.navigate('Map');
    };
    const handleContact = () => {
        navigation.navigate('Contact');
    };
    const handleMessage = () => {
        navigation.navigate('Message');
    };
    const handleConditions = () => {
      navigation.navigate('Conditions');
  };
    const handleHome = () => {
        navigation.navigate('Home');
    };
  // Screen Navigation end

  return (
    <View style={styles.container}>
      {/* Logo Container start */}
      <View style={styles.logoContainer}>
        <Image style={styles.image} source = {require('../assets/logo1.png')}/>
      </View>
      {/* Logo Container end */}
      {/* Button Container start */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress= {handleBrowse}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Browse Properties</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {handleAbout}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>About Us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {handleMap}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Map</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {handleContact}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Contact</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {handleMessage}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Message</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {handleConditions}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Terms & Conditions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {handleHome}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Button Container end */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#33363F'
  },
  // Logo Container start
  logoContainer: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  // Logo Container end
  // Button Container start
  buttonContainer: {
    paddingTop: 50,
  },
  button: {
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#FFFFFF'
  }
  // Button Container end
})