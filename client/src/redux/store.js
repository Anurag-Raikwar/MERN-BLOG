import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import themeReducer from "./theme/themeSlice";

const rootReducer = combineReducers({
    user : userReducer,
    theme : themeReducer
})

const persitConfig = {
    key : 'root',
    storage,
    version : 1,    
}
const persistedReducer = persistReducer(persitConfig,rootReducer)

export const store = configureStore({
  reducer : persistedReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false
  })
});

export const persistor = persistStore(store);