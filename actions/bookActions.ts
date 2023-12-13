import { createAction } from '@reduxjs/toolkit';

interface PriceComponentProps {
    value: string,
    price: number,
}

export const setApartmentSize = createAction<number>('book/setApartmentSize');
export const setApartmentSizePrice = createAction<number>('book/setApartmentSizePrice');

export const setServiceType = createAction<string>('book/setServiceType');
export const setServiceTypePrice = createAction<number>('book/setServiceTypePrice');

export const setBedroomCount = createAction<number>('book/setBedroomCount');
export const setBedroomCountPrice = createAction<number>('book/setBedroomCountPrice');

export const setKitchenCount = createAction<number>('book/setKitchenCount');
export const setKitchenCountPrice = createAction<number>('book/setKitchenCountPrice');

export const setBathroomCount = createAction<number>('book/setBathroomCount');
export const setBathroomCountPrice = createAction<number>('book/setBathroomCountPrice');

export const setDirtyDegree = createAction<string>('book/setDirtyDegree');
export const setDirtyDegreePrice = createAction<number>('book/setDirtyDegreePrice');

export const setExtraServices = createAction<string[]>('book/setExtraServices');
export const setExtraServicesPrice = createAction<number>('book/setExtraServicesPrice');

export const setCleaningDate = createAction<string>('book/setCleaningDate');
export const setCleaningTime = createAction<string>('book/setCleaningTime');

export const setCleaningFrequencyType = createAction<string>('book/setCleaningFrequencyType');
export const setCleaningFrequencyTypePrice = createAction<number>('book/setCleaningFrequencyTypePrice');

export const setExecutionSpeed = createAction<string>('book/setExecutionSpeed');
export const setExecutionSpeedPrice = createAction<number>('book/setExecutionSpeedPrice');

export const setAddress = createAction<string>('book/setAddress');
export const setSecondAddress = createAction<string>('book/setSecondAddress');
export const setPostalCode = createAction<string>('book/setPostalCode');
export const setCity = createAction<string>('book/setCity');
export const setProvince = createAction<string>('book/setProvince');

export const setSpecialInstructions = createAction<string>('book/setSpecialInstructions');

export const setPriceComponents = createAction<PriceComponentProps[]>('book/setPriceComponents');

export const setTotalPrice = createAction<number>('book/setTotalPrice');
export const setSubTotalPrice = createAction<number>('book/setSubTotalPrice');
export const setTaxPrice = createAction<number>('book/setTaxPrice');
