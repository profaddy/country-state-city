import { ICountry } from './interface';
declare function getCountryByCode(isoCode: string): ICountry | undefined;
declare function getAllCountries(): ICountry[];
export { getCountryByCode, getAllCountries, };
