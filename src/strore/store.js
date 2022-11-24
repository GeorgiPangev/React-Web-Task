import rootReducer from "./reducer"
import storage from 'redux-persist/lib/storage'
import {configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})
export const persistor = persistStore(store)