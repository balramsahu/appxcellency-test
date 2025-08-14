import { useId } from "react";
import { SnackAlertAdded } from "../../components/snack-bar";
import { useAppDispatch } from "../../stores";
import { addUser } from "../../stores/thunk/userThunk";
import type { UserType } from "../../utils/types";
import UserForm from "./user-form";

interface UserAddProps {
    header: string;
    user?: UserType;
    handleClose: () => void;
}
export const UserAdd = ({ header, user, handleClose }: UserAddProps) => {
    const dispatch = useAppDispatch();
    const newId = useId();

    const onSubmit = (data: UserType) => {
        console.log("Form Data:", data, newId);
        dispatch(addUser({ ...data, id: newId }))
        SnackAlertAdded();
        handleClose();
    };
    return (
        <>
            <UserForm header={header} formData={user as UserType} handleClose={handleClose} onSubmit={onSubmit} />
        </>
    )
}