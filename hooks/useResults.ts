import { useEffect, useState } from "react";
import businessService from "../services/business.service";

export interface BusinessResponse {
    id: string,
    name: string,
    image_url: string,
    url: string,
    phone: string,
    display_phone: string,
    is_closed: boolean,
    review_count: number,
    rating: number,
    price: '₺' | '₺₺' | '₺₺₺' | '₺₺₺₺'
    photos: string[],

    location: {
        address1: string,
        address2: string,
        address3: string,
        display_address: string[],
        city: string,
        zip_code: string,
        country: string,
        state: string,
        cross_streets: string
    },

    coordinates: { latitude: number, longitude: number },
    categories: [{ title: string }]
}


export default (): [Function, BusinessResponse[], string] => {
    const [results, setResults] = useState<BusinessResponse[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (term = '') => {
        console.log('run');
        try {
            const response = await businessService.get('/search', {
                params: {
                    limit: 30,
                    term,
                    location: 'Istanbul'
                }
            });
            setResults(response.data.businesses);
            // console.log(response.data.businesses);
        } catch (error) {
            setErrorMessage(error);
        }
    }

    useEffect(() => { searchApi() }, []);

    return [searchApi, results, errorMessage]
}