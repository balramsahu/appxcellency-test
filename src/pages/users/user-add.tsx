import { SnackAlertAdded } from "../../components/snack-bar";
import { useAppDispatch, useAppSelector } from "../../stores";
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
  const { userList } = useAppSelector((state) => state.userReducer);
  const onSubmit = (data: UserType) => {
    dispatch(
      addUser({
        ...data,
        id: `${userList?.length + 1}`,
        lastActivity: new Date().toString(),
      }),
    );
    SnackAlertAdded();
    handleClose();
  };
  return (
    <>
      <UserForm
        header={header}
        formData={user as UserType}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
    </>
  );
};
