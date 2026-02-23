import axios from "axios";

const keyAPI = "54675250-921b736f026c47058d05b606e";
const urlAPI = "https://pixabay.com/api/";


export const perPage = 15;

export const  getImagesByQuery = async (query, page = 1) => {
    const response = await axios.get(urlAPI, {params:{
    key: keyAPI,
    q: `${query}`,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page: perPage,
    }});
    return response.data;
    
}
    
