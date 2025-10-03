import "dotenv/config";
import axios from "axios";
import { RequestData } from "../types/FormData";

const ROOT_URL = process.env.API_URL || null;
const ENDPOINT = process.env.API_ENDPOINT || null;

const API_URL = `${ROOT_URL}/${ENDPOINT}`;

const API_KEY = process.env.API_KEY || null;

export async function predictPrice(data: RequestData) : Promise<ResponseType> {
    const response = await axios.post(API_URL, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`,
        }
    });
    return await response.data;
}
