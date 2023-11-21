import axios from "axios";
import {baseURL, apiKeyTMDB} from "../configuration"

export class TVShowAPI {

    static async fetchPopulars() {
        const response = await axios.get(`${baseURL}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);
        return response.data.results;
    }

    static async fetchRecommendations(tvShowID) {
        const response = await axios.get(`${baseURL}tv/${tvShowID}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`)
        return response.data.results;
    }

    static async fetchSearch(input) {
        const response = await axios.get(`${baseURL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${input}`)
        return response.data.results;
    }

}