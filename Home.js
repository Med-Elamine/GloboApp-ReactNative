import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HomePage(){
    return(
        <View style={styles.container}>
            <Text>Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});