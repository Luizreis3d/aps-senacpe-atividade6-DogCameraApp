import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search?limit=5')
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <FlatList
      data={dogs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.url }} style={styles.image} />
          <Text style={styles.text}>ID: {item.id}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
  },
});
