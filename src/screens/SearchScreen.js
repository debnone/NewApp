import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Search screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
