import { IState } from './interface';
export declare function getAllStates(): IState[];
export declare function getStatesOfCountry(countryCode?: string): IState[];
export declare function getStateByCodeAndCountry(stateCode: string, countryCode: string): IState | undefined;
export declare function getStateByCode(isoCode: string): IState | undefined;
