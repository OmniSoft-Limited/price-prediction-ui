import { Currency } from "./Currency";
import { SoftwareTypes } from "./SoftwareTypes";

export interface RequestDataForm {
    name: string;
    softwarename: string,
    data: SoftwareTypes,
    currency: Currency,
}
