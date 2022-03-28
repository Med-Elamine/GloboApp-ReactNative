import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import * as RootNavigation from "./RootNavigation"


export default function Footer(){
    return(
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() =>RootNavigation.navigate('HomePage')}>
                <Text>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>RootNavigation.navigate('About')}>
                <Text>ABOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>RootNavigation.navigate('Quote')}>
                <Text>QUOTE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>CATALOG</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button:{
        padding: 20
    }
});