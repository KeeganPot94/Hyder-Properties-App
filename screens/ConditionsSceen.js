import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConditionsScreen() {

  // Screen Navigation start
  const navigation = useNavigation()

  const handleMenu = () => {
      navigation.navigate('Menu');
  };
  // Screen Navigation end

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.header}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress= {handleMenu}>
            <Image source = {require('../assets/menu.png')} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Terms & Conditions
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text1}>{"\n"}Agreement to our legal terms{"\n"}</Text>
        <Text style={styles.text2}>
          We are Hyder Properties ('Company', 'we', 'us', or 'our'), a company registered in South Africa at 7 Mellis Road, Bradenham Hall, Rivonia, Gauteng 2128.We operate the mobile application Hyder Properties (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').You can contact us by phone at 011 020 9999, or by mail to 7 Mellis Road, Bradenham Hall, Rivonia, Gauteng 2128, South Africa.
          {"\n"}
          {"\n"}
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Hyder Properties, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. If you do not agree with all of these legal terms, then you are expressly prohibited from using the services and you must discontinue use immediately.
          {"\n"}
          {"\n"}
          Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason.
          {"\n"}
          {"\n"}
          The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
          {"\n"}
          {"\n"}
          We recommend that you print a copy of these Legal Terms for your records.
          {"\n"}
        </Text>
        <Text style={styles.text3}>{"\n"}Last updated May 20, 2023{"\n"}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    paddingLeft: 20
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  // Header Container end
  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text1: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  text2: {
    textAlign: 'center'
  },
  text3: {
    color: '#33363F',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})