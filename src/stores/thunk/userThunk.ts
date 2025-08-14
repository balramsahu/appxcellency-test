import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUserAdd, setUserList, setUserRemove, setUserUpdate } from "../slice/userSlice";
import userList from "../../utils/data.json";
import type { UserType } from "../../utils/types";

export const getUsers = createAsyncThunk(
    'getUsers',
    async (_arg, { dispatch }) => {
        try {
            dispatch(setUserList(userList?.Users));
        } catch (error) {
            console.log("error getting user", error);
        } finally {
            console.log('get user');
        }
    }
)

export const addUser = createAsyncThunk(
    'addUser',
    async (arg: UserType, { dispatch }) => {
        try {
            dispatch(setUserAdd(arg));
        } catch (error) {
            console.log("error getting user", error);
        } finally {
            console.log('add');
        }
    }
);

export const updateUser = createAsyncThunk(
    'updateUser',
    async (arg: UserType, { dispatch }) => {
        try {
            dispatch(setUserUpdate(arg));
        } catch (error) {
            console.log("error getting user", error);
        } finally {
            console.log('update');
        }
    }
)

export const removeUser = createAsyncThunk(
    'removeUser',
    async (arg: string, { dispatch }) => {
        try {
            dispatch(setUserRemove(arg));
        } catch (error) {
            console.log("error getting products", error);
        } finally {
            console.log('remove');
        }
    }
)