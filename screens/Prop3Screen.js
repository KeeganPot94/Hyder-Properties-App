import React, { useState } from 'react';
import {  Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput, Button, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Prop3Screen =() => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleLoanAmountChange = (text) => {
    setLoanAmount(text);
  };

  const handleInterestRateChange = (text) => {
    setInterestRate(text);
  };

  const handleLoanTermChange = (text) => {
    setLoanTerm(text);
  };

  const calculateMonthlyPayment = () => {
    const loan = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    const numerator = rate * Math.pow(1 + rate, term);
    const denominator = Math.pow(1 + rate, term) - 1;

    const result = loan * (numerator / denominator);
    setMonthlyPayment(result.toFixed(2));
  };

// Screen Navigation start
const navigation = useNavigation()

  const handleMenu = () => {
    navigation.navigate('Menu');
    };
// Screen Navigation end

  return (
    <ScrollView style={styles.container1}>
    <View style={styles.header}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress= {handleMenu}>
          <Image source = {require('../assets/menu.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          The Austin
        </Text>
      </View>
    </View>
    <Image source = {require('../assets/TheAustin.png')} style = {{ width: '100%', height: 200}}/>
      <Card style = {{ margin: 10}}>
        <Text style={styles.paragraph}> 
            Whether you’re looking for a cozy space to call your own, a space for your growing family, or a brand new addition to your property portfolio, we have the unit for you.
        </Text>
        <Text style={styles.paragraph}> 
            The Austin is not just a place to live, it’s a community. Our Lifestyle Centre offers a range of amenities designed to bring people together and make life more enjoyable. Take advantage of our braai area, cool off in the swimming pool and let the kids rule our play area.
        </Text>
        <View>
          <Text style={styles.heading2}> 
            Facilities
          </Text>
          <FlatList
            data={[
              {key: 'Uniques modern finishes'},
              {key: 'North facing units'},
              {key: 'Gas Hob, Electric Oven and Extractor'},
              {key: 'Gas Geyser with centralised Gas Supply'},
              {key: 'Lifestyle Centre with Pool and Working Space'},
                {key: 'Children’s Play Area and Braai Area '},
                {key: 'Running Trail and Basketball Court'},
                {key: 'Fibre Ready'},
            ]}
            renderItem={({item}) => <Text>{`\u2022 ${item.key}`}</Text>}
          />
        </View>

        <View>
          <Text style={styles.heading2}> 
            Security
          </Text>
          <FlatList
            data={[
              {key: '24-Hour Security & Patrol'},
              {key: 'Electric Fence'},
              {key: 'CCTV Surveillance '},
              {key: 'Smart Access System '},
              {key: 'High Boundary Wall'},
            ]}
            renderItem={({item}) => <Text >{`\u2022 ${item.key}`}</Text>}
          />
        </View>

        <Text style={styles.heading2}> 
          Property Details
        </Text>
        <Text style={styles.heading2}>Listed for: R1,249,900.00</Text>
        <FlatList
          data={[
            {key: '2 Bedrooms'},
            {key: '2 Bathroom'},
            {key: '75 Square meters'},
          ]}
          renderItem={({item}) => <Text >{`\u2022 ${item.key}`}</Text>}
        />
        <View style={styles.imageContainer}>
          <Image
            style = {{ width: 200, height: 150, marginVertical: 5}}
            source = {require('../assets/TheAustin1.png')}
          />
          <Image
            style = {{ width: 200, height: 150, marginVertical: 5}}
            source = {require('../assets/TheAustin2.png')}
          />
          <Image
            style = {{ width: 200, height: 150, marginVertical: 5}}
            source = {require('../assets/TheAustin3.png')}
          />
          <Image
            style = {{ width: 200, height: 150, marginVertical: 5}}
            source = {require('../assets/TheAustin4.png')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading2}>Mortgage Calculator</Text>
          <View style={styles.inputContainer}>
          <Text style={styles.paragraph}>Loan Amount:</Text>
          <TextInput
            style={styles.input}
            value={loanAmount}
            onChangeText={handleLoanAmountChange}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.paragraph}>Interest Rate:</Text>
          <TextInput
            style={styles.input}
            value={interestRate}
            onChangeText={handleInterestRateChange}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.paragraph}>Loan Term (in years):</Text>
          <TextInput
            style={styles.input}
            value={loanTerm}
            onChangeText={handleLoanTermChange}
            keyboardType="numeric"
          />
        </View>
        <Button title="Calculate" onPress={calculateMonthlyPayment} />
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Monthly Payment:</Text>
          <Text style={styles.result}>R {monthlyPayment}</Text>
        </View>
      </View>
    </Card>
  </ScrollView>
  );
}

export default Prop3Screen

const styles = StyleSheet.create({
  // Header Container start
  header: {
    width: '100%',
    height: 47,
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
    paddingLeft: 70
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  // Header Container end
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    padding: 10
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
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    padding: 8,
    fontSize: 16,
    backgroundColor:'#88b7c9',
    borderRadius:25,
    height:55,
    marginBottom:20,
    borderColor: '#4ba3c8',
  },
  resultContainer: {
    marginTop: 16,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  result: {
    fontSize: 16,
    marginTop: 8,
    paddingLeft: 10,
    paddingBottom: 5
  },
})



