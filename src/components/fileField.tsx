import Dropzone from "react-dropzone";
import { Box } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import type { ReactNode } from "react";

interface Props {
  onDrop: (v: File[]) => void;
  children?: ReactNode;
}
export const FileField = ({ onDrop, children }: Props) => {

  return (
    <Box
      sx={{
        borderRadius: "5px",
        border: "2px dashed #000",
        padding: "5px",
        textAlign: "center",
        width: "100%",
        "& div": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }
      }}
    >
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {children ? (
              children
            ) : (
              <>
                <AttachFile /> Upload Profile
              </>
            )}
          </div>
        )}
      </Dropzone>
    </Box>
  );
};
