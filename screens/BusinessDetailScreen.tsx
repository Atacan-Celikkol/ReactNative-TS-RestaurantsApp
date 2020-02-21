import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { AirbnbRating } from "react-native-ratings";
import Loader from "../components/Loader";
import { BusinessResponse } from "../hooks/useResults";
import businessService from "../services/business.service";

export default function BusinessDetailScreen(props) {

    const [response, setResponse]: [BusinessResponse, Function] = useState(null);
    const id = props.route.params.businessId;

    const getBusiness = async (id) => {
        const response = await businessService.get(`/${id}`);
        setResponse(response.data);
    }

    useEffect(() => { getBusiness(id) }, []);

    if (!response) {
        return <Loader />;
    }

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={response.photos}
                keyExtractor={(x) => x}
                renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
            />
            <View style={{ position: 'absolute', alignSelf: 'center' }}>
                {
                    response.is_closed ?
                        <View style={{ padding: 5, backgroundColor: '#e33', width: 100, alignContent: 'center' }}>
                            <Text style={{ color: '#eee', alignSelf: 'center', fontSize: 14, fontWeight: 'bold' }}>Closed Now</Text>
                        </View>
                        :
                        <View style={{ padding: 5, backgroundColor: '#3a3', width: 100, alignContent: 'center' }}>
                            <Text style={{ color: '#eee', alignSelf: 'center', fontSize: 14, fontWeight: 'bold' }}>Open Now</Text>
                        </View>
                }
            </View>
            <View style={styles.container}>
                <Text style={styles.name}>{response.name}</Text>
                <View style={styles.ratingContainer}>
                    <AirbnbRating
                        count={5}
                        defaultRating={response.rating}
                        size={20}
                        showRating={false}
                        isDisabled={true}
                        starContainerStyle={styles.starsContainer}
                    />
                    <Text> {response.review_count} reviews</Text>
                </View>

                <View style={styles.information}>
                    <Text>Price: {response.price}</Text>
                    <Text>Phone: {response.phone}</Text>
                    <Text>Address: {response.location.display_address.join(' ')}</Text>
                </View>

                <View style={styles.mapContainer}>
                    <MapView style={styles.mapStyle}
                        initialRegion={{
                            latitude: response.coordinates.latitude,
                            longitude: response.coordinates.longitude,
                            latitudeDelta: 0.009,
                            longitudeDelta: 0.009,
                        }}
                    >
                        <Marker
                            coordinate={response.coordinates}
                        />
                    </MapView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 5
    },
    image: {
        width: 412,
        height: 200
    },
    name: {
        fontSize: 27,
    },
    starsContainer: {
        alignSelf: 'flex-start',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    information: {
        marginTop: 5
    },
    mapContainer: {
        borderWidth: 2,
        borderColor: '#aaa',
        height: 250,
    },
    mapStyle: {
        flex: 1
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
    }
});