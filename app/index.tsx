import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';

export default function IndexScreen() {
    const [query, setQuery] = useState("");
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Hello"
                }} />
            <Text>Hello</Text>
            <Link href="/search"><Text>Open search</Text></Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
