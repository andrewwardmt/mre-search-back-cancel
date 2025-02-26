import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { Stack } from 'expo-router';
import { useState } from 'react';

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Example",
          headerSearchBarOptions: {
            placeholder: "Search for something",
            onChangeText(e) {
              setQuery(e.nativeEvent.text);
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
