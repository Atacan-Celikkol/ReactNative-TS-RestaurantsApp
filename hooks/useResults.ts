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


export default (): [Function, BusinessResponse[], boolean, string] => {
    const [results, setResults] = useState<BusinessResponse[]>([]);
    const [categories, setCategories] = useState<[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const searchApi = async (term = '') => {
        try {
            setIsLoading(true);
            const response = await businessService.get('/search', {
                params: {
                    limit: 30,
                    term,
                    location: 'Istanbul'
                }
            });
            setResults(response.data.businesses);
            console.log(response.data.businesses);
            results.forEach(x => {
                // TODO: Categories
            });


        } catch (error) {
            setErrorMessage(error);
        } finally { setIsLoading(false); }
    }

    useEffect(() => { searchApi() }, []);

    return [searchApi, results, isLoading, errorMessage]
}