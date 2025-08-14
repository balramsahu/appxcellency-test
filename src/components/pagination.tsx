import React from "react";
import { TablePagination } from "@mui/material";

interface PaginationProps {
    count: number;
    page: number;
    rowsPerPage: number;
    setPage: (v: number) => void;
    setRowsPerPage: (v: number) => void;
}
export const PaginationData = ({ count, page, rowsPerPage, setPage, setRowsPerPage }: PaginationProps) => {
    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            {/* Pagination */}
            <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[4, 6, 8]}
            />
        </>
    )
}