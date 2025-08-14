import { SnackAlertUpdated } from "../../components/snack-bar";
import { useAppDispatch } from "../../stores";
import { updateUser } from "../../stores/thunk/userThunk";
import type { UserType } from "../../utils/types";
import UserForm from "./user-form";

interface UserEditProps {
    header: string;
    user?: UserType;
    handleClose: () => void;
}
export const UserEdit = ({ header, user, handleClose }: UserEditProps) => {
    const dispatch = useAppDispatch();

    const onSubmit = (data: UserType) => {
        console.log("Form edit:", data);
        dispatch(updateUser(data))
        SnackAlertUpdated();
        handleClose();
    };
    return (
        <>
            <UserForm header={header} formData={user as UserType} handleClose={handleClose} onSubmit={onSubmit} />
        </>
    )
}