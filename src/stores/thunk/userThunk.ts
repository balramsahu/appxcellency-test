import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setUserAdd,
  setUserList,
  setUserRemove,
  setUserUpdate,
} from "../slice/userSlice";
import userList from "../../utils/data.json";
import type { UserType } from "../../utils/types";
import { setLoading } from "../slice/loaderSlice";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_arg, { dispatch }) => {
    dispatch(setLoading({ key: "getUsers", value: true }));
    try {
      dispatch(setUserList(userList?.Users));
    } catch (error) {
      console.log("error getting user", error);
    } finally {
      console.log("get user");
      dispatch(setLoading({ key: "getUsers", value: false }));
    }
  },
);

export const addUser = createAsyncThunk(
  "addUser",
  async (arg: UserType, { dispatch }) => {
    dispatch(setLoading({ key: "addUser", value: true }));
    try {
      dispatch(setUserAdd(arg));
    } catch (error) {
      console.log("error getting user", error);
    } finally {
      console.log("add");
      dispatch(setLoading({ key: "addUser", value: false }));
    }
  },
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (arg: UserType, { dispatch }) => {
    dispatch(setLoading({ key: "updateUser", value: true }));
    try {
      dispatch(setUserUpdate(arg));
    } catch (error) {
      console.log("error getting user", error);
    } finally {
      console.log("update");
      dispatch(setLoading({ key: "updateUser", value: false }));
    }
  },
);

export const removeUser = createAsyncThunk(
  "removeUser",
  async (arg: string, { dispatch }) => {
    dispatch(setLoading({ key: "removeUser", value: true }));
    try {
      dispatch(setUserRemove(arg));
    } catch (error) {
      console.log("error getting products", error);
    } finally {
      console.log("remove");
      dispatch(setLoading({ key: "removeUser", value: false }));
    }
  },
);
