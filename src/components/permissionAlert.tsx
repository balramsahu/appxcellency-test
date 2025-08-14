import { Delete } from "@mui/icons-material";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    Typography,
} from "@mui/material";

interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    message: string;
    loading: boolean;
}
const PermissionAlert = ({
    open,
    onClose,
    onSubmit,
    message,
    loading,
}: Props) => {
    return (
        <Dialog open={open} maxWidth="xs" sx={{ textAlign: "center" }} fullWidth={true}>
            <DialogTitle><Delete color="error" sx={{ fontSize: 50 }} /></DialogTitle>
            <DialogContent>
                <Typography>{message}</Typography>
            </DialogContent>
            <DialogActions sx={{ textAlign: "center" }}>
                <Button onClick={onClose} variant="outlined" color="info">
                    No
                </Button>
                <Button
                    variant="contained"
                    onClick={onSubmit}
                    type="submit"
                    disabled={loading ? true : false}
                >
                    Yes
                    {loading && <CircularProgress color="secondary" size={15} />}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PermissionAlert;
