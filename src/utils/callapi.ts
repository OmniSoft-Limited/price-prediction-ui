import axios from "axios";
import { RequestData, ResponseType } from "../utils/Preprocessor/types";

const ROOT_URL = import.meta.env.VITE_API_URL || null;
const ENDPOINT = import.meta.env.VITE_API_ENDPOINT || null;

const API_URL = `${ROOT_URL}/${ENDPOINT}`;

const API_KEY = import.meta.env.VITE_API_KEY || null;

export async function predictPrice(data: RequestData) : Promise<ResponseType> {
    const response = await axios.post(API_URL, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`,
        }
    });
    return await response.data;
}
