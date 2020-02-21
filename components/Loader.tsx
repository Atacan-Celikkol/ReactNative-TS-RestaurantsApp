import React from 'react';
import { Image, StyleSheet, View } from "react-native";

export default function Loader() {
    return (
        <View style={styles.container}>
            <Image style={styles.gif} source={require('../assets/loader.gif')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    gif: {
        alignSelf: "center",
        marginBottom: 100,
        height: 150,
        width: 200
    },
});