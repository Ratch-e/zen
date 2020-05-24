import * as React from 'react';
import { useSelector } from 'react-redux';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { RootState } from '../../reducers';

import NewLead from './NewLead';
import useLeadsActions from './useLeadsActions';
import { Lead } from './Lead';
import { lead } from './types';

const Leads = () => {
    const [isPopupShown, togglePopup] = React.useState(false);
    const leads = useSelector((state: RootState) => state.leadsReducer.leads);
    const { getLeads, deleteLead } = useLeadsActions();

    React.useEffect(() => {
        getLeads();
    }, []);

    const renderLeads = () => (leads && leads.length ? (
        leads.map(({
            id, email, name, message,
        }: lead) => (
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
    ));

    return (
        <>
            {renderLeads()}
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => togglePopup(true)}
            >
                <Add />
            </Fab>
            <NewLead
                open={isPopupShown}
                handleClose={() => togglePopup(false)}
            />
        </>
    );
};

export default Leads;
