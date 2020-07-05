import * as React from "react";
import { Form, Field } from "react-final-form";
import { TextField, Button, Link } from "@material-ui/core";

import { Page } from "../layout/page/Page";
import { useAuthActions } from "../../reducers/auth/useAuthActions";

interface LoginData {
    username: string;
    password: string;
}

export const Login = () => {
    const { login } = useAuthActions();
    const onSubmit = (data: LoginData) => login(data.username, data.password);
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
                        <Button type="submit">Login</Button>
                        <p>
                            Dont have an account?
                            <Link href="/login">Login</Link>
                        </p>
                    </form>
                )}
            </Form>
        </Page>
    );
};
