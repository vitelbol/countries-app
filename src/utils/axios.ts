import axios from "axios";
const instance = axios.create({
    baseURL: "https://restcountries.com/v3.1/all?fields=name,flags,population,region"
})

export default instance;