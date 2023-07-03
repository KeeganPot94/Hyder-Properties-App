import { FlatList, Pressable, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, {useEffect, useState} from 'react'
import { db } from '../src/config/firebase';
import { collection, doc, getDocs } from "firebase/firestore"; 
import { useNavigation } from '@react-navigation/native';

const ListFooter = () => {
  //View to set in Footer
  return (
    <View style={styles.headerFooterStyle}>
    </View>
  );
};

class Property {
    constructor (apartmentNumber, briefDescription, location, imageUrl ) {
        this.apartmentNumber = apartmentNumber;
        this.briefDescription = briefDescription;
        this.location = location;
        this.imageUrl = imageUrl;
    }
    toString() {
        return this.apartmentNumber + ', ' + this.briefDescription + ', ' + this.location + ', ' + this.imageUrl;
    }
  }
  
  // Firestore data converter
  const propertyConverter = {
    toFirestore: (property) => {
        return {
            apartmentNumber: property.apartmentNumber,
            briefDescription: property.briefDescription,
            location: property.location,
            imageUrl : property.imageUrl
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Property(data.apartmentNumber, data.briefDescription, data.location, data.imageUrl);
    }
  };

  //const FetchSpecificData = async () => {}

const BrowseScreen = () => {

    const [propertyList, setPropertyList] = useState([]);

    const properties =[];
  useEffect(() => {
    
      const FetchData = async () => {
      
      const querySnapshot = await getDocs(collection(db, "Properties"));
      try {
        
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        
        const {apartmentNumber, complexName, imageUrl, noOfBed, noOfBath, sizeinsqmeters} = doc.data();
        
        properties.push({
            id: doc.id,
            apartmentNumber,
            complexName,
            imageUrl,
            noOfBed,
            noOfBath,
            sizeinsqmeters
        });

        console.log(properties);
        setPropertyList(properties);
      });

      }catch (error) {
        console.log('Error retrieving data:', error);
      }
    }; 

    FetchData();
    
  }, []);

  // Screen Navigation start
  const navigation = useNavigation()

    const handleProp1 = () => {
    navigation.navigate('Prop1');
    };
    const handleProp2 = () => {
      navigation.navigate('Prop2');
      };
      const handleProp3 = () => {
        navigation.navigate('Prop3');
        };
    const handleMenu = () => {
      navigation.navigate('Menu');
      };
  // Screen Navigation end

  return (
    <View style={{flex: 1,  alignItems: 'center'}}>
      <StatusBar/>
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <FlatList
        ListFooterComponent={ListFooter}
      />
      </SafeAreaView>
      <View style={styles.header}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress= {handleMenu}>
            <Image source = {require('../assets/menu.png')} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Properties
          </Text>
        </View>
      </View>
      <FlatList 
        style={{height: '100%'}}
        data={propertyList}
        //numColumns={1}
        renderItem={({item}) => (
        <Pressable style ={{textAlign: 'center'} }> 
          <View>
            <Pressable onPress={handleProp1}>
              <Image style={styles.image}source={{ uri: item.imageUrl }} />
              <View style={styles.content}>
                <View style={styles.contentLeft}>
                  <Text style={styles.title}>Complex Name:</Text>
                  <Text style={styles.title}>Unit Number:</Text>
                  <Text style={styles.title}>Number of Bathrooms:</Text>
                  <Text style={styles.title}>Number of Bedrooms:</Text>
                  <Text style={styles.title}>Square Meters:</Text>
                </View>
                <View style={styles.contentRight}>
                  <Text style={styles.info}>{item.complexName}</Text>
                  <Text style={styles.info}>{item.apartmentNumber}</Text>
                  <Text style={styles.info}>{item.noOfBath}</Text>
                  <Text style={styles.info}>{item.noOfBed}</Text>
                  <Text style={styles.info}>{item.sizeinsqmeters} sq m</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Line Break */}
          <Text/>
        </Pressable>
      )}></FlatList>
    </View>
  )
}

export default BrowseScreen

const styles = StyleSheet.create({
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
  // Property Conatiner start
  image: {
    width: 330,
    height: 200,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#dde4e6',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  info: {
    textAlign: 'center',
    paddingLeft: 50,
  },
  // Property Conatiner end
})
