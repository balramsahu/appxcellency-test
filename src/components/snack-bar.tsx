import { toast } from "react-toastify";

export const SnackAlertDelete = () => toast('User deleted successfully', { type: "error" });
export const SnackAlertAdded = () => toast('User added successfully', { type: "success" });
export const SnackAlertUpdated = () => toast('User updated successfully', { type: "info" });
export const SnackAlertAddedCompany = () => toast('Company added successfully', { type: "success" });
