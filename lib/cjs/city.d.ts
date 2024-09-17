import { ICity } from './interface';
declare function getAllCities(): {
    name: string;
    countryCode: string;
    stateCode: string;
    latitude: string;
    longitude: string;
}[];
declare function getCitiesOfState(countryCode: string, stateCode: string): ICity[];
declare function getCitiesOfCountry(countryCode: string): ICity[] | undefined;
export { getAllCities, getCitiesOfState, getCitiesOfCountry, };
