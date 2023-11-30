import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlices";

const appStore = configureStore(
    {
        reducer: {
            user : userReducer,
        },
    }
)

export default appStore;