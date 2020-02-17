import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ term, onTermChanged, onTermSubmit }) {
    return (
        <View style={styles.container}>
            <EvilIcons name="search" style={styles.icon} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.input}
                value={term}
                onChangeText={onTermChanged}
                onEndEditing={() => onTermSubmit(term)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#eaeaea',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        flex: 1
    },
    icon: {
        fontSize: 40,
        marginHorizontal: 10,
        alignSelf: "center"
    }
});