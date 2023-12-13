import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExtraServiceProps {
    value: string,
    price: number,
    count: number,
}

interface BookState {
    apartmentSize: number;
    apartmentSizePrice: number;
    serviceType: string;
    serviceTypePrice: number;
    extraServices: ExtraServiceProps[];
    extraServicesPrice: number;
    bedroomCount: number;
    bedroomCountPrice: number;
    kitchenCount: number;
    kitchenCountPrice: number;
    bathroomCount: number;
    bathroomCountPrice: number;
    dirtyDegree: string;
    dirtyDegreePrice: number;
    cleaningDate: string;
    cleaningTime: string;
    cleaningFrequencyType: string;
    cleaningFrequencyTypePrice: number;
    executionSpeed: string;
    executionSpeedPrice: number;
    address: string;
    secondAddress: string;
    postalCode: string;
    city: string;
    province: string;
    specialInstructions: string;
    totalPrice: number;
    subTotalPrice: number;
    taxPrice: number;
}

const initialState: BookState = {
    apartmentSize: 0,
    apartmentSizePrice: 0,
    serviceType: '',
    serviceTypePrice: 0,
    extraServices: [],
    extraServicesPrice: 0,
    bedroomCount: 0,
    bedroomCountPrice: 0,
    kitchenCount: 0,
    kitchenCountPrice: 0,
    bathroomCount: 0,
    bathroomCountPrice: 0,
    dirtyDegree: '',
    dirtyDegreePrice: 0,
    cleaningDate: '',
    cleaningTime: '',
    cleaningFrequencyType: '',
    cleaningFrequencyTypePrice: 0,
    executionSpeed: '',
    executionSpeedPrice: 0,
    address: '',
    secondAddress: '',
    postalCode: '',
    city: '',
    province: '',
    specialInstructions: '',
    totalPrice: 0,
    subTotalPrice: 0,
    taxPrice: 0,
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setValue: <T extends keyof BookState>(state: BookState, action: PayloadAction<{ key: T; value: BookState[T] }>) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        setExtraService: (state: BookState, action: PayloadAction<ExtraServiceProps>) => {
            const { value, price, count } = action.payload;

            const existingServiceIndex = state.extraServices.findIndex((service) => service.value === value);

            if (existingServiceIndex !== -1) {
                if (count > 0) {
                    state.extraServices[existingServiceIndex] = { value, price, count };
                } else {
                    state.extraServices.splice(existingServiceIndex, 1);
                }
            } else {
                state.extraServices.push({ value, price, count });
            }
        },
    },
});

export const { setValue, setExtraService } = bookSlice.actions;

export default bookSlice.reducer;


/*
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setApartmentSize: (state, action: PayloadAction<number>) => {
            state.apartmentSize = action.payload;
        },
        setApartmentSizePrice: (state, action: PayloadAction<number>) => {
            state.apartmentSizePrice = action.payload;
        },
        setServiceType: (state, action: PayloadAction<string>) => {
            state.serviceType = action.payload;
        },
        setServiceTypePrice: (state, action: PayloadAction<number>) => {
            state.serviceTypePrice = action.payload;
        },
        setBedroomCount: (state, action: PayloadAction<number>) => {
            state.bedroomCount = action.payload;
        },
        setBedroomCountPrice: (state, action: PayloadAction<number>) => {
            state.bedroomCountPrice = action.payload;
        },
        setKitchenCount: (state, action: PayloadAction<number>) => {
            state.kitchenCount = action.payload;
        },
        setKitchenCountPrice: (state, action: PayloadAction<number>) => {
            state.kitchenCountPrice = action.payload;
        },
        setBathroomCount: (state, action: PayloadAction<number>) => {
            state.bathroomCount = action.payload;
        },
        setBathroomCountPrice: (state, action: PayloadAction<number>) => {
            state.bathroomCountPrice = action.payload;
        },
        setDirtyDegree: (state, action: PayloadAction<string>) => {
            state.dirtyDegree = action.payload;
        },
        setDirtyDegreePrice: (state, action: PayloadAction<number>) => {
            state.dirtyDegreePrice = action.payload;
        },
        setExtraServices: (state, action: PayloadAction<string[]>) => {
            state.extraServices = action.payload;
        },
        setExtraServicesPrice: (state, action: PayloadAction<number>) => {
            state.extraServicesPrice = action.payload;
        },
        setCleaningDate: (state, action: PayloadAction<string>) => {
            state.cleaningDate = action.payload;
        },
        setCleaningTime: (state, action: PayloadAction<string>) => {
            state.cleaningTime = action.payload;
        },
        setCleaningFrequencyType: (state, action: PayloadAction<string>) => {
            state.cleaningFrequencyType = action.payload;
        },
        setCleaningFrequencyTypePrice: (state, action: PayloadAction<number>) => {
            state.cleaningFrequencyTypePrice = action.payload;
        },
        setExecutionSpeed: (state, action: PayloadAction<string>) => {
            state.executionSpeed = action.payload;
        },
        setExecutionSpeedPrice: (state, action: PayloadAction<number>) => {
            state.executionSpeedPrice = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        setSecondAddress: (state, action: PayloadAction<string>) => {
            state.secondAddress = action.payload;
        },
        setPostalCode: (state, action: PayloadAction<string>) => {
            state.postalCode = action.payload;
        },
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        setProvince: (state, action: PayloadAction<string>) => {
            state.province = action.payload;
        },
        setSpecialInstructions: (state, action: PayloadAction<string>) => {
            state.specialInstructions = action.payload;
        },
        setPriceComponents: (state, action: PayloadAction<PriceComponentProps[]>) => {
            state.priceComponents = action.payload;
        },
        setTotalPrice: (state, action: PayloadAction<number>) => {
            state.totalPrice = action.payload;
        },
        setSubTotalPrice: (state, action: PayloadAction<number>) => {
            state.subTotalPrice = action.payload;
        },
        setTaxPrice: (state, action: PayloadAction<number>) => {
            state.taxPrice = action.payload;
        },
    },
});

export const {
    setApartmentSize,
    setApartmentSizePrice,
    setServiceType,
    setServiceTypePrice,
    setBedroomCount,
    setBedroomCountPrice,
    setKitchenCount,
    setKitchenCountPrice,
    setBathroomCount,
    setBathroomCountPrice,
    setDirtyDegree,
    setDirtyDegreePrice,
    setExtraServices,
    setExtraServicesPrice,
    setCleaningDate,
    setCleaningTime,
    setCleaningFrequencyType,
    setCleaningFrequencyTypePrice,
    setExecutionSpeed,
    setExecutionSpeedPrice,
    setAddress,
    setSecondAddress,
    setPostalCode,
    setCity,
    setProvince,
    setSpecialInstructions,
    setPriceComponents,
    setTotalPrice,
    setSubTotalPrice,
    setTaxPrice,
} = bookSlice.actions;

export default bookSlice.reducer;*/
