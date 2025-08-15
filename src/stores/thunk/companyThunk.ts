import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setCompanyAdd,
  setCompanyList,
  setCompanyRemove,
  setCompanyUpdate,
} from "../slice/companySlice";
import companyList from "../../utils/data.json";
import type { CompanyType } from "../../utils/types";
import { setLoading } from "../slice/loaderSlice";

export const getCompany = createAsyncThunk(
  "getCompany",
  async (_arg, { dispatch }) => {
    dispatch(setLoading({ key: "getCompany", value: true }));
    try {
      dispatch(setCompanyList(companyList?.Company));
    } catch (error) {
      console.log("error getting company", error);
    } finally {
      console.log("get company");
      dispatch(setLoading({ key: "getCompany", value: false }));
    }
  },
);

export const addCompany = createAsyncThunk(
  "addCompany",
  async (arg: CompanyType, { dispatch }) => {
    dispatch(setLoading({ key: "addCompany", value: true }));
    try {
      dispatch(setCompanyAdd(arg));
    } catch (error) {
      console.log("error getting company", error);
    } finally {
      console.log("add");
      dispatch(setLoading({ key: "addCompany", value: false }));
    }
  },
);

export const updateCompany = createAsyncThunk(
  "updateCompany",
  async (arg: CompanyType, { dispatch }) => {
    try {
      dispatch(setCompanyUpdate(arg));
    } catch (error) {
      console.log("error getting company", error);
    } finally {
      console.log("update");
    }
  },
);

export const removeCompany = createAsyncThunk(
  "removeCompany",
  async (arg: string, { dispatch }) => {
    try {
      dispatch(setCompanyRemove(arg));
    } catch (error) {
      console.log("error getting products", error);
    } finally {
      console.log("remove");
    }
  },
);
