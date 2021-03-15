import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default PromotionScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Promotion screen</Text>
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
