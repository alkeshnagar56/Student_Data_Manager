import { configureStore } from "@reduxjs/toolkit";
import studentmanager from './Slice';
const store = configureStore({
    reducer:{
    student: studentmanager
}
})
export default store;