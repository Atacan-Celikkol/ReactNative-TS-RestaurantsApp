import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BusinessResponse } from "../hooks/useResults";

export default function ResultsDetail(props: { item: BusinessResponse }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.item.image_url }} />
            <Text style={styles.name}>{props.item.name}</Text>
            <Text style={styles.rating}>Rating: <Text style={{ color: props.item.rating > 4 ? '#3b3' : '#ea3', fontWeight: 'bold' }}>{props.item.rating}</Text> ({props.item.review_count} reviews)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: "column",
        width: 200
    },
    image: {
        width: 200,
        height: 100,
        borderRadius: 4,        
    },
    name: {
        fontSize: 20,
    },
    rating: {
        fontSize: 12,
        fontWeight: "100"
    }
});