import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Loader from "../components/Loader";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

export default function SearchScreen({ navigation }) {
    const [term, setTerm] = useState('');
    const [searchApi, results, isLoading, errorMessage] = useResults();

    const filterResultsByPrice = (price: '₺' | '₺₺' | '₺₺₺' | '₺₺₺₺') => {
        return results.filter(x => x.price === price);
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <View style={styles.container}>
            <SearchBar term={term} onTermChanged={setTerm} onTermSubmit={searchApi} />
            {results.length === 0 ? <Text style={styles.centerMessage}>Nothing found!</Text> : null}

            <ScrollView>
                <ResultsList title="Cheap Restaurants" results={filterResultsByPrice('₺')} />
                <ResultsList title="Mid Restaurants" results={filterResultsByPrice('₺₺')} />
                <ResultsList title="Upper-Mid Restaurants" results={filterResultsByPrice('₺₺₺')} />
                <ResultsList title="Luxury Restaurants" results={filterResultsByPrice('₺₺₺₺')} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1
    },
    centerMessage: {
        alignSelf: "center"
    }
});