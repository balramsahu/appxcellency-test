import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCompanyAdd, setCompanyList, setCompanyRemove, setCompanyUpdate } from "../slice/companySlice";
import companyList from "../../utils/data.json";
import type { CompanyType } from "../../utils/types";

export const getCompany = createAsyncThunk(
    'getCompany',
    async (_arg, { dispatch }) => {
        try {
            dispatch(setCompanyList(companyList?.Company));
        } catch (error) {
            console.log("error getting company", error);
        } finally {
            console.log('get company');
        }
    }
)

export const addCompany = createAsyncThunk(
    'addCompany',
    async (arg: CompanyType, { dispatch }) => {
        try {
            dispatch(setCompanyAdd(arg));
        } catch (error) {
            console.log("error getting company", error);
        } finally {
            console.log('add');
        }
    }
);

export const updateCompany = createAsyncThunk(
    'updateCompany',
    async (arg: CompanyType, { dispatch }) => {
        try {
            dispatch(setCompanyUpdate(arg));
        } catch (error) {
            console.log("error getting company", error);
        } finally {
            console.log('update');
        }
    }
)

export const removeCompany = createAsyncThunk(
    'removeCompany',
    async (arg: string, { dispatch }) => {
        try {
            dispatch(setCompanyRemove(arg));
        } catch (error) {
            console.log("error getting products", error);
        } finally {
            console.log('remove');
        }
    }
)