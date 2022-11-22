import rootReducer from "./reduser"
import storage from 'redux-persist/lib/storage'
import {configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {persistStore} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}
const persistReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})
export const persistor = persistStore(store)