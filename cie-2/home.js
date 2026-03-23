import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Home({ navigation }) {
  const [destination, setDestination] = useState('');

  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>Travel Explore</Text>

      {/* Heading */}
      <Text style={styles.heading}>Explore your destination</Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter destination"
        value={destination}
        onChangeText={setDestination}
      />

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Destination', { place: destination })
        }
      >
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20
  },
  heading: {
    fontSize: 18,
    marginBottom: 15,
    color: '#34495e'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
