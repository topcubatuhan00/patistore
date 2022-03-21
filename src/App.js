import React from 'react';
import {
  TextInput,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import ProductCard from '../src/components/ProductCard';
import data from '../data/products.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Ara..."
        autoFocus={false}
      />
      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
        data={data}
        renderItem={({item}) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 28,
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
  },
});

export default App;
