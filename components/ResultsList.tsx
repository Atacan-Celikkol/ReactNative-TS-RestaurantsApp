import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { BusinessResponse } from "../hooks/useResults";
import ResultsDetail from "./ResultsDetail";



export default function ResultsList(props: { title: string, results: BusinessResponse[] }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginHorizontal:-10}}
                data={props.results}
                keyExtractor={(x: BusinessResponse) => x.id}
                renderItem={({ item }) => <ResultsDetail item={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        fontSize: 25
    },
    list: {
    },
});