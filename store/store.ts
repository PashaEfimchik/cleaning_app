import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../reducers/bookReducer';

const store = configureStore({
    reducer: {
        book: bookReducer,
    },
});

//store.subscribe(() => console.log("store: ", store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;