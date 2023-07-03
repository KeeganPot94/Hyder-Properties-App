import { FlatList, Pressable, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, {useEffect, useState} from 'react'
import { db } from '../src/config/firebase';
import { collection, doc, query, where, getDocs } from "firebase/firestore"; 
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

  const handleProp = (apartmentNumber) => {
    if (apartmentNumber === 105){
      navigation.navigate('Prop3')
    } else if (apartmentNumber === 120) {
  
      navigation.navigate('Prop2')
    } else if (apartmentNumber === 200) {
      navigation.navigate('Prop1')
    }
  };
    const handleMenu = () => {
      navigation.navigate('Menu');
    };
  // Screen Navigation end

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

  // Search Bar Function start
  const FetchSpecificData = async () => {
    const field = "apartmentNumber"
    const q = query(collection(db, "Properties"), where(field, "==", selectedItem));
    const querySnapshot = await getDocs(q);
    const properties = [];
    try {
           
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        
        const {apartmentNumber, complexName, imageUrl, noOfBath, noOfBed, sizeinsqmeters} = doc.data();
        
        properties.push({
            id: doc.id,
            apartmentNumber,
            complexName,
            imageUrl,
            noOfBath,
            noOfBed,
            sizeinsqmeters
        });
        console.log(properties);
      });
      setPropertyList(properties);
      }catch (error) {
          console.log('Error retrieving data:', error);
        }     
      };

  const refillProperties = async () => {
    setDropdownOpen(!dropdownOpen)
    FetchData();
  }

  const [selectedItem, setSelectedItem] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownSelect = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };
  // Search Bar Function end

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

      {/* Search Bar start*/}
      <View style={styles.searchContainer}>
        {/* Search Button*/}
        <TouchableOpacity
          style={styles.button1}
          onPress={() => FetchSpecificData()}
        />
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => refillProperties()}>
          <Text style={styles.dropdownButtonText}>
            {selectedItem ? selectedItem.label : 'Browse via apartment number'}
          </Text>
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdownMenu}>
            {propertyList.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.dropdownMenuItem,
                  selectedItem === item ? styles.dropdownMenuItemSelected : null,
                ]}
                onPress={() => handleDropdownSelect(item.apartmentNumber)}>
                <Text style={styles.dropdownMenuItemText}>{item.apartmentNumber}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TouchableOpacity
          style={styles.button2}
          onPress={() => FetchSpecificData()}
        ><Text style={styles.buttonLabel}>Search</Text></TouchableOpacity>
      </View>
      {/* Search Bar end*/}

      <FlatList 
        style={{height: '100%'}}
        data={propertyList}
        //numColumns={1}
        renderItem={({item}) => (
        <Pressable style ={{textAlign: 'center'} }> 
          <View>
            <Pressable onPress={() => handleProp(item.apartmentNumber)}>
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
  // Search Container start
  searchContainer: {
    width: 330,
    margin: 10,
    backgroundColor: '#dde4e6',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  },
  button2: {
    width: 100,
    height: 30,
    backgroundColor: '#047FB3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5
  },
  buttonLabel: {
    color: 'white'
  },
  // Search Container end
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
