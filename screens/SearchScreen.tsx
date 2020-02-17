import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price: '₺' | '₺₺' | '₺₺₺' | '₺₺₺₺') => {
        return results.filter(x => x.price === price);
    }

    return (
        <View style={styles.container}>
            <SearchBar term={term} onTermChanged={setTerm} onTermSubmit={searchApi} />
            {errorMessage.length > 0 ? <Text>{results.length}</Text> : null}
            
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
        flex:1
    }
});