import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import NewLead from "./NewLead";
import useLeadsActions from "./useLeadsActions";
import Lead from "./Lead";

const Leads = () => {
    const [isPopupShown, togglePopup] = useState(false);
    const leads = useSelector((state) => state.leadsReducer.leads);
    const { getLeads, deleteLead } = useLeadsActions();

    useEffect(() => {
        getLeads();
    }, []);

    const renderLeads = () =>
        leads && leads.length ? (
            leads.map(({ id, email, name, message }) => (
                <Lead
                    key={id}
                    id={id}
                    email={email}
                    name={name}
                    message={message}
                    onDelete={deleteLead}
                />
            ))
        ) : (
            <div>no leads</div>
        );

    return (
        <>
            {renderLeads()}
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => togglePopup(true)}
            >
                <AddIcon />
            </Fab>
            <NewLead
                open={isPopupShown}
                handleClose={() => togglePopup(false)}
            />
        </>
    );
};

export default Leads;
