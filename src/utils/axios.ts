import axios from "axios";
const instance = axios.create({
    baseURL: "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,code"
})

export default instance;