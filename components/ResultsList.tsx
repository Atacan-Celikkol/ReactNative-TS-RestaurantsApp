import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BusinessResponse } from "../hooks/useResults";
import * as RootNavigation from "../RootNavigation";
import ResultsDetail from "./ResultsDetail";


export default function ResultsList(props: { title: string, results: BusinessResponse[] }) {

    if (!props.results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginHorizontal: -10 }}
                data={props.results}
                keyExtractor={(x: BusinessResponse) => x.id}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={1} onPress={() => RootNavigation.navigate('BusinessDetails', { businessId: item.id })}>
                        <ResultsDetail item={item} />
                    </TouchableOpacity>
                }
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