import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LikedScreen() {

  // Screen Navigation start
  const navigation = useNavigation()

  const handleBrowse = () => {
      navigation.navigate('Browse');
  };
  // Screen Navigation end

  return (
    <View style={styles.container}>
      <Text>This is the Liked Property Screen{"\n"}</Text>
      <View>
        <TouchableOpacity onPress= {handleBrowse}>
          <View style={styles.button}>
            <Text>Browse</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 150,
    height: 70,
    backgroundColor: '#047FB3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
  },
})