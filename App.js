import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container} >
        <Text> Pink Loop 3 </Text>
        <Text> Morgana </Text > 
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});