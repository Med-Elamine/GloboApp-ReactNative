import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import logo from './assets/globomantics-logo-bug-black.png'


export default function Header(props){
    return(
        <View style={styles.header}>
            <Image source={logo} style={{width:35, height:35}}></Image>
            <View>
                <Text style={styles.text}>
                    {props.headerDisplay}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    text:{
        fontFamily: 'OpenSans'
    }
});