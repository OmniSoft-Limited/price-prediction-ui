import axios from "axios";
import { RequestData, ResponseType } from "../utils/Preprocessor/types";
import { API_KEY, API_URL } from './config';



export async function predictPrice(data: RequestData) : Promise<ResponseType> {
    const response = await axios.post(API_URL, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`,
        }
    });
    return await response.data;
}
