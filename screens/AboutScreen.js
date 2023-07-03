import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {

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
            About Us
          </Text>
        </View>
      </View>
    <Image source = {require('../assets/logo1.png')} 
    style = {{ width: 200, height: 150, marginLeft:90}}/>
      <Card 
      style = {{ margin: 10}}>
        <ScrollView>
          <Text style={styles.paragraph}>
            At Hyder Properties, we aim to build more than just buildings
            We lay the foundations for valuable property investments and create spaces for 
            sought-after lifestyles. We achieve this by carefully selecting prime South African locations 
            for our property developments, using appealing architecture, appointing experienced professionals 
            for construction and only using quality materials.
          </Text>
          <Text style={styles.paragraph}>
            From the moment you step through any of our properties' doorsteps, you will see how 
            our developments reflect its beautiful surroundings yet provide a lifestyle that 
            combines style and international technology. With this approach, we are creating 
            developments that speak to South Africans that want their property to reflect their 
            current success.
          </Text>
          
          <Text style={styles.heading2}> 
          Simplistically stylish
          </Text>
          <Text style={styles.paragraph}>
            Our stunning finishes will take your breath away.
          </Text>
          <Text style={styles.heading2}> 
          Unique
          </Text>
          <Text style={styles.paragraph}>
            One of a kind homes.
          </Text>
          <Text style={styles.heading2}> 
          Quality
          </Text>
          <Text style={styles.paragraph}>
            Top of the range materials.
          </Text>
        </ScrollView>
      </Card>
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
  headingContainer: {
    paddingLeft: 80
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
})