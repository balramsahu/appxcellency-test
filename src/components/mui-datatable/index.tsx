import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PaginationData } from "../pagination";
import type { UserType } from "../../utils/types";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { roleColors } from "../roles";

interface DataTable {
  users: UserType[];
  open: boolean;
  handleClick: (e: React.MouseEvent<HTMLElement>, user: UserType) => void;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleEditing: () => void;
  handleDeleting: () => void;
}
export const DataTable = ({
  users,
  open,
  handleClick,
  anchorEl,
  handleClose,
  handleEditing,
  handleDeleting,
}: DataTable) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  return (
    <>
      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#d6b4fc" }}>
              <TableCell>User Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Last Activity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.length > 0 ? (
              users
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((user: UserType, idx) => (
                  <TableRow key={idx}>
                    {/* User Info */}
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar src={`${user?.avatar}`} />
                        <Box>
                          <Typography fontWeight={600}>{user?.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {user?.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>

                    {/* Roles */}
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        {user?.roles?.map((role: string) => (
                          <Chip
                            key={role}
                            label={role}
                            color={roleColors[role]}
                            size="small"
                          />
                        ))}
                      </Stack>
                    </TableCell>

                    {/* Last Activity */}
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        Last Activity
                      </Typography>
                      <Typography>
                        {new Date(user?.lastActivity).toLocaleString()}
                      </Typography>
                    </TableCell>

                    {/* Action */}
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={(e) => handleClick(e, user)}
                      >
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>Data not found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* Pagination Data */}
        <PaginationData
          count={users?.length}
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      </TableContainer>
      {/* action menu */}
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& ul": {
            color: "#fff",
          },
        }}
      >
        <MenuItem
          key={0}
          onClick={handleEditing}
          sx={{
            color: "#000",
            "&:hover": { backgroundColor: "#fa423b", color: "#fff" },
          }}
        >
          Edit Profile
        </MenuItem>
        <MenuItem
          key={1}
          onClick={handleDeleting}
          sx={{
            color: "#000",
            "&:hover": { backgroundColor: "#fa423b", color: "#fff" },
          }}
        >
          Delete Profile
        </MenuItem>
      </Menu>
    </>
  );
};
