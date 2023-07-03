import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../src/config/firebase';
import { Card } from 'react-native-paper';
import { useState } from 'react';



export default function LoginScreen() {

  // User Signup Auth Start
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('');


  // Screen Navigation start
  const navigation = useNavigation()
  
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const handleMenu = () => {
    navigation.navigate('Menu');
  };
  // Screen Navigation end
const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setErrorMessage(''); // Clear the error message state
      navigation.navigate('Browse');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage); // Set the error message state
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.header}>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress= {handleMenu}>
              <Image source = {require('../assets/menu.png')} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
      <Image source = {require('../assets/logo1.png')} 
      style = {{ width: 200, height: 150, marginLeft:90}}/>
      <Text style={styles.heading}>
        Login
      </Text>
      <Card 
      style = {{ margin: 10}}>
        <Text style={styles.heading2}> 
        Enter your details
        </Text>
        <Text style={styles.paragraph}> In order to sign in you must enter the details used to register. </Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="USERNAME"
          onChangeText={text => setEmail(text)}
          value={email} />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        </View>
        <Button
          title="Login"
          color="#0480b2"
          onPress={handleLogin}
          />
        <Text></Text>
        <Button
          title="Register"
          color="#0480b2"
          onPress={handleSignup}
          />
        {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}
      </Card>
        </KeyboardAvoidingView>
          </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    position: 'absolute',
    backgroundColor: '#ecf0f1',
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
  // Header Container end
  heading: {
    fontSize: 30,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading2: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph:{
    fontSize: 15,
    textAlign: 'center',
    margin: 15,
  },
  headerFooterStyle: {
    width: '100%',
    height: 80,
    backgroundColor: '#d5212b',
  },
  inputView:{
    width:"100%",
    backgroundColor:"#88b7c9",
    borderRadius:25,
    height:55,
    marginBottom:20,
    borderColor: '#4ba3c8',
    justifyContent:"center",
    paddingLeft: 10,
},
  inputText:{
    height:50,
    color:"Black",
    justifyContent:"center",
},
errorText: {
  textAlign: 'center',
  justifyContent:"center",
  color: '#d5212b',
  paddingVertical: 5,
}
});