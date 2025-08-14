import { Add, Search } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

interface SearchProps {
    search: string;
    setSearch: (v: string) => void;
    handleNewUser: () => void;
}
export const SearchBar = ({ search, setSearch, handleNewUser }: SearchProps) => {
    return (
        <>
            {/* Search + Add User */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
                <TextField
                    variant="outlined"
                    placeholder="Search"
                    value={search} onChange={e => setSearch(e.target.value)}
                    sx={{
                        bgcolor: "white",
                        borderRadius: 2,
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
            </Stack>
        </>
    )
}