import { Currency } from "./Currency";

export interface RequestData {
    name: string;
    softwarename: string,
    data: number[],
    currency: Currency,
}
