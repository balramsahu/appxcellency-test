import { createSlice, type Draft } from "@reduxjs/toolkit";
import type { UserType } from "../../utils/types";

interface initialStateType {
    userList: UserType[];
    userAdd: UserType;
    userRemove: UserType;
}

const initialState: initialStateType = {
    userList: [],
    userAdd: {} as UserType,
    userRemove: {} as UserType,
}
const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setUserList: (state: Draft<initialStateType>, action) => ({
            ...state,
            userList: action?.payload
        }),
        setUserAdd: (state: Draft<initialStateType>, action) => {
            const item = action?.payload;
            state.userList?.push(item);
        },
        setUserUpdate: (state: Draft<initialStateType>, action) => {
            state.userList = state.userList.map(pro => pro.id !== action.payload.id ? pro : action.payload);
        },
        setUserRemove: (state: Draft<initialStateType>, action) => {
            state.userList = state.userList.filter(pro => pro.id !== action.payload);
        },
    }
});

export const { setUserList, setUserAdd, setUserUpdate, setUserRemove } = UserSlice.actions;
export default UserSlice.reducer;