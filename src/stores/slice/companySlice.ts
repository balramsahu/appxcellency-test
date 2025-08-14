import { createSlice, type Draft } from "@reduxjs/toolkit";
import type { CompanyType } from "../../utils/types";

interface initialStateType {
    companyList: CompanyType[];
    companyAdd: CompanyType;
    companyRemove: CompanyType;
}

const initialState: initialStateType = {
    companyList: [],
    companyAdd: {} as CompanyType,
    companyRemove: {} as CompanyType,
}
const CompanySlice = createSlice({
    name: "CompanySlice",
    initialState,
    reducers: {
        setCompanyList: (state: Draft<initialStateType>, action) => ({
            ...state,
            companyList: action?.payload
        }),
        setCompanyAdd: (state: Draft<initialStateType>, action) => {
            const item = action?.payload;
            state.companyList?.push(item);
        },
        setCompanyUpdate: (state: Draft<initialStateType>, action) => {
            state.companyList = state.companyList.map(pro => pro.id !== action.payload.id ? pro : action.payload);
        },
        setCompanyRemove: (state: Draft<initialStateType>, action) => {
            state.companyList = state.companyList.filter(pro => pro.id !== action.payload);
        },
    }
});

export const { setCompanyList, setCompanyAdd, setCompanyUpdate, setCompanyRemove } = CompanySlice.actions;
export default CompanySlice.reducer;