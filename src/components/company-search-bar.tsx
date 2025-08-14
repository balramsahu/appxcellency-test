import { Add, Search } from "@mui/icons-material";
import { Button, Grid, InputAdornment, MenuItem, Select, TextField, type SelectChangeEvent } from "@mui/material";

interface SearchProps {
    search: string;
    selectedName: string;
    companyNames: string[];
    setSearch: (v: string) => void;
    handleNewUser: () => void;
    handleSelect: (e: SelectChangeEvent) => void;
}
export const CompanySearchBar = ({ search, selectedName, companyNames, setSearch, handleNewUser, handleSelect }: SearchProps) => {
    return (
        <>
            {/* Search + Add Company */}
            <Grid container mb={3} spacing={1}>
                <Grid size={{ md: 4, xs: 12 }}>
                    <Select value={selectedName} onChange={handleSelect} size="small" sx={{ minWidth: "150px" }}>
                        {companyNames?.map((v) => (
                            <MenuItem key={v} value={v}>{v}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid size={{ md: 4, xs: 12 }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        fullWidth
                        size="small"
                        value={search} onChange={e => setSearch(e.target.value)}
                        sx={{
                            bgcolor: "white",
                            borderRadius: 2,
                            mr: 1,
                            width: 300,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid size={{ md: 4, xs: 12 }}>
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        sx={{
                            bgcolor: "#7b4dff",
                            textTransform: "none",
                            borderRadius: 2,
                            "&:hover": { bgcolor: "#6a3de0" },
                        }}
                        onClick={handleNewUser}
                    >
                        Add New User
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}