import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _4wr0RTXFE4t0-O0ddrBQBKZZkgOqO3o9w6RWdHQ_hyJWvxKBG7xtYCy7lL8f0WgeB8EhYIWjubLaw6PdbAK6eMBQzmVoONhEojuy-VuDtTqutYHJxgdPPVhvTVKXnYx'
    }
});