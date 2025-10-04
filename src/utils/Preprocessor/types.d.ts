import { Currency } from '../../types/Currency';

export interface RequestData {
	name: string;
	softwarename: string;
	data: number[];
	currency: Currency;
}

export interface ResponseType {
	prediction: number;
	currency: Currency;
	curency_price: number;
}