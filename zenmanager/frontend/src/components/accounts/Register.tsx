import * as React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@material-ui/core";

import { Page } from "../layout/page/Page";

export const Register = () => {
    const onSubmit = (data: any) => console.log("submitted", data);
    return (
        <Page>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {(field) => (
                                <div>
                                    <TextField
                                        label="Name"
                                        value={field.input.value}
                                        onChange={field.input.onChange}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="email">
                            {(field) => (
                                <div>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        value={field.input.value}
                                        onChange={field.input.onChange}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {(field) => (
                                <div>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        value={field.input.value}
                                        onChange={field.input.onChange}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="password2">
                            {(field) => (
                                <div>
                                    <TextField
                                        label="Password again"
                                        type="password"
                                        value={field.input.value}
                                        onChange={field.input.onChange}
                                    />
                                </div>
                            )}
                        </Field>
                        <Button type="submit">Register</Button>
                    </form>
                )}
            </Form>
        </Page>
    );
};
