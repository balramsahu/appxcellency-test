import { ExpandMore, Person } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import type { CompanyType } from "../utils/types";
import type { ReactNode } from "react";

interface AccordianProps {
    data: CompanyType;
    children: ReactNode;
}
export const AccordianData = ({ data, children }: AccordianProps) => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                       {data?.name}
                    </Typography>
                    
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0,color: 'text.secondary' }}>
                       {data?.description}
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary',display:"flex",alignItems:"center" }}>
                       <Person />{1}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </>
    )
}