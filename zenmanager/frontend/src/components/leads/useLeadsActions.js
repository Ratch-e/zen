import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_LEADS, DELETE_LEAD, ADD_LEAD } from "../../types";
import { LEADS_URL } from "../../api/contants";

const useLeadsActions = () => {
    const dispatch = useDispatch();
    const getLeads = async () => {
        try {
            const res = await axios.get(LEADS_URL);
            dispatch({
                type: SET_LEADS,
                payload: res.data,
            });
        } catch (err) {
            return console.error(err);
        }
    };

    const addLead = async (lead) => {
        try {
            const res = await axios.post(LEADS_URL, lead);
            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            });
        } catch (err) {
            return console.error(err);
        }
    };

    const deleteLead = async (id) => {
        try {
            await axios.delete(`${LEADS_URL}${id}/`);
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            });
        } catch (err) {
            return console.error(err);
        }
    };

    return { getLeads, deleteLead, addLead };
};

export default useLeadsActions;
