import { configureStore } from "@reduxjs/toolkit";
import logoReducer from "./logoSlice";
import menuReducer from "./menuSlice";
import dateTimeReducer from "./dateTimeSlice";

export default configureStore({
    reducer: {
        logo: logoReducer,
        menu: menuReducer,
        dateTime: dateTimeReducer
    }
});