import * as React from "react";
import { Dialog, DialogTitle, TextField, Button } from "@material-ui/core";
import { Form, Field } from "react-final-form";

import useLeadsActions from "./useLeadsActions";
import { lead } from "./types";

interface Props {
    open: boolean;
    handleClose: () => void;
}

const NewLead = ({ open, handleClose }: Props) => {
    const { addLead } = useLeadsActions();
    const onSubmit = async (values: lead) => {
        await addLead(values);
        handleClose();
    };
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add a new lead</DialogTitle>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="name">
                            {(props) => (
                                <div>
                                    <TextField
                                        label="Name"
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="email">
                            {(props) => (
                                <div>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="message">
                            {(props) => (
                                <div>
                                    <TextField
                                        label="Message"
                                        multiline
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                </div>
                            )}
                        </Field>
                        <Button color="primary" type="submit">
                            Save
                        </Button>
                    </form>
                )}
            </Form>
        </Dialog>
    );
};

export default NewLead;
