import { Box } from "@mui/material";
import type { AlertType, UserType } from "../../utils/types";
import { useEffect, useState, type MouseEvent } from "react";
import { DataTable } from "../../components/mui-datatable";
import { SearchBar } from "../../components/search-bar";
import PermissionAlert from "../../components/permissionAlert";
import DialogsBox from "../../components/dialogBox";
import { UserEdit } from "./user-edit";
import { UserAdd } from "./user-add";
import { useAppDispatch, useAppSelector } from "../../stores";
import { removeUser } from "../../stores/thunk/userThunk";
import { SnackAlertDelete } from "../../components/snack-bar";

interface UserListProps {
  company_id: string;
}
export default function UserList({ company_id }: UserListProps) {
  const dispatch = useAppDispatch();
  const { userList } = useAppSelector((state) => state.userReducer);
  const [users, setUserList] = useState<UserType[]>([]);
  const [profile, setProfile] = useState<UserType | undefined>(undefined);

  useEffect(() => {
    setUserList(userList);
  }, [userList]);

  // search user data
  const [search, setSearch] = useState("");
  const filtered = users?.filter(
    (u) =>
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())) &&
      u?.company_id == company_id,
  );

  // add user data
  const [newUser, setNewUser] = useState<AlertType>({
    open: false,
    user: undefined,
  });

  const handleNewUser = () => {
    setNewUser({ open: true, user: profile });
  };
  const handleNewClose = () => {
    setNewUser({ open: false, user: undefined });
    setProfile(undefined);
  };

  // action menu open
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>, user: UserType) => {
    setProfile(user);
    setAnchorEl(event.currentTarget);
  };

  // delete profile
  const [isDeleting, setIsDeleting] = useState<AlertType>({
    open: false,
    user: undefined,
  });

  const handleDeleting = () => {
    setIsDeleting({ open: true, user: profile });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setIsDeleting({ open: false, user: undefined });
    setAnchorEl(null);
    setProfile(undefined);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    profile?.id && dispatch(removeUser(profile?.id));
    setIsDeleting({ open: false, user: undefined });
    SnackAlertDelete();
  };

  // handle edit
  const [isEditing, setIsEditing] = useState<AlertType>({
    open: false,
    user: undefined,
  });
  const handleEditing = () => {
    setIsEditing({ open: true, user: profile });
    setAnchorEl(null);
  };
  const handleEditClose = () => {
    setIsEditing({ open: false, user: undefined });
    setAnchorEl(null);
    setProfile(undefined);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#d6b4fc", p: 4 }}>
        {/* Search + Add User */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleNewUser={handleNewUser}
        />

        {/* Data Table */}
        <DataTable
          users={filtered}
          open={open}
          handleClick={handleClick}
          anchorEl={anchorEl}
          handleClose={handleClose}
          handleEditing={handleEditing}
          handleDeleting={handleDeleting}
        />
      </Box>

      {/* Add Profile */}
      <DialogsBox
        open={newUser?.open}
        handleClose={handleNewClose}
        maxWidth="sm"
      >
        <UserAdd
          header="Add Profile"
          user={{ ...newUser?.user, company_id: company_id } as UserType}
          handleClose={handleNewClose}
        />
      </DialogsBox>

      {/* Edit Profile */}
      <DialogsBox
        open={isEditing?.open}
        handleClose={handleEditClose}
        maxWidth="sm"
      >
        <UserEdit
          header="Edit Profile"
          user={isEditing?.user}
          handleClose={handleEditClose}
        />
      </DialogsBox>

      {/* Delete Profile */}
      {isDeleting && (
        <PermissionAlert
          open={isDeleting?.open}
          onClose={handleClose}
          onSubmit={handleDelete}
          message="Are you sure do you want to delete it ?"
          loading={false}
        />
      )}
    </>
  );
}
