import { Currency } from "./Currency";

export interface ResponseType {
    prediction: number,
    currency: Currency,
    currency_price: number,
}