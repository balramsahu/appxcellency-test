import { Fragment, useEffect, useState } from "react";
import { CompanySearchBar } from "../../components/company-search-bar";
import DialogsBox from "../../components/dialogBox";
import { AccordianData } from "../../components/accordianData";
import { Box, type SelectChangeEvent } from "@mui/material";
import type { CompanyType } from "../../utils/types";
import UserList from "../users";
import AddCompanyForm from "../company";
import { useAppDispatch, useAppSelector } from "../../stores";
import { getCompany } from "../../stores/thunk/companyThunk";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { companyList } = useAppSelector((state) => state.companyReducer);

    const [company, setCompanyList] = useState<CompanyType[]>([]);
    useEffect(() => {
        dispatch(getCompany())
    }, []);

    useEffect(() => {
        setCompanyList(companyList)
    }, [companyList]);

    // search user data
    const [search, setSearch] = useState('');
    const [selectedName, setSelectedName] = useState('');

    const filtered = company
        ?.filter(u => {
            // Search filter
            const matchesSearch =
                u.name.toLowerCase().includes(search.toLowerCase()) ||
                u.email.toLowerCase().includes(search.toLowerCase());

            // Select filter (if something is selected)
            const matchesSelect = selectedName
                ? u.name === selectedName
                : true;

            return matchesSearch && matchesSelect;
        });

    const handleSelect = (e: SelectChangeEvent) => {
        setSelectedName(e.target.value);
    }

    // add company data
    const [newCompany, setNewCompany] = useState(false);

    const handleNewCompany = () => {
        setNewCompany(true);
    };
    const handleNewClose = () => {
        setNewCompany(false);
    };
    return (
        <>
            <Box sx={{ bgcolor: "#fff", p: 4 }}>
                <CompanySearchBar search={search} setSearch={setSearch} companyNames={company?.map((v) => v?.name)} handleNewUser={handleNewCompany} handleSelect={handleSelect} selectedName={selectedName} />
                {filtered?.length ? filtered?.map((company) => (
                    <Fragment key={company?.id}>
                        <AccordianData data={company}>
                            <UserList />
                        </AccordianData>
                    </Fragment>
                )) : (
                    <>Data Not Found</>
                )}
            </Box>

            {/* Add Comapy */}
            <DialogsBox open={newCompany} handleClose={handleNewClose} maxWidth="sm">
                <AddCompanyForm handleNewClose={handleNewClose} />
            </DialogsBox>
        </>
    )
}

export default HomePage;