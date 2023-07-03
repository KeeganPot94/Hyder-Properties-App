import React from 'react';
import { Card } from 'react-native-paper';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen() {

  // Screen Navigation start
  const navigation = useNavigation()

  const handleMenu = () => {
      navigation.navigate('Menu');
  };
  // Screen Navigation end

  return (
    <View style={styles.container}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress= {handleMenu}>
            <Image source = {require('../assets/menu.png')} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Contact Us
          </Text>
        </View>
      </View>
    <Image source = {require('../assets/logo1.png')} 
    style = {{ width: 200, height: 150, marginLeft:90}}/>
      <Card 
      style = {{ margin: 10}}>
        <ScrollView>
      <Text style={styles.heading2}> 
      Sales Hotline Number 
      </Text>
      <Text style={styles.paragraph}>072 321 8888</Text>
      <Text style={styles.heading2}> 
      Telephone Number 
      </Text>
      <Text style={styles.paragraph}>011 020 9999</Text>
      <Text style={styles.heading2}> 
      Head Office (Johannesburg) 
      </Text>
      <Text style={styles.paragraph}> 1st Floor of North Building, Bradenham Hall,
             7 Mellis Road, Rivonia </Text>
      <Text style={styles.heading2}> 
      93 On New Sales Office
      </Text>
      <Text style={styles.paragraph}> 93 on New Estate, 93 New Rd, 
              Carlswald, Midrand, 1684 </Text>
      <Text style={styles.heading2}> 
      50 on Lever Sales Office
      </Text>
      <Text style={styles.paragraph}> 50 on Lever - Hyder Properties, 
              351 Pavarotti Rd, Carlswald, Midrand, 1684</Text>
      <Text style={styles.heading2}> 
      Postal Address 
      </Text>
      <Text style={styles.paragraph}> For deliveries, please use the following postal address: 
              PostNet Suite 598, Private Bag X26, Sunninghill 2157</Text>
              </ScrollView>
      </Card>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    position:'absolute',
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
  headingContainer: {
    paddingLeft: 80
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  // Header Container end
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
  scrollView: {
    marginHorizontal: 0,
  }
});
