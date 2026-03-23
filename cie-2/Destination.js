import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Destination({ route, navigation }) {
  const { place } = route.params;

  return (
    <View style={styles.container}>
      
      {/* Heading */}
      <Text style={styles.title}>Travel Destination</Text>

      {/* Destination Name */}
      <Text style={styles.place}>{place}</Text>

      {/* Image */}
      <Image
        source={{
          uri: 'https://source.unsplash.com/400x300/?travel'
        }}
        style={styles.image}
      />

      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
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
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  place: {
    fontSize: 20,
    color: '#3498db',
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

