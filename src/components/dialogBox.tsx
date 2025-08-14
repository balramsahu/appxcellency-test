/**
 * DialogsBox sub child component.
 * - Props are getting open, handleClose, maxWidth, children
 * - View Detail
 *
 */
import type { ReactNode } from "react";
import { Dialog, DialogContent } from "@mui/material";

export interface Props {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  maxWidth: "xs" | "lg" | "sm" | "md" | "xl";
}

const DialogsBox = ({ open, handleClose, children, maxWidth }: Props) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};

export default DialogsBox;
