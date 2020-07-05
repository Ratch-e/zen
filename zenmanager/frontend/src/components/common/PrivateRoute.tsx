import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "../../reducers/auth/types";

interface Props {
    component: React.ElementType;
    auth?: Auth;
    [x: string]: any;
}

export const PrivateRoute = ({
    component: Component,
    auth,
    ...rest
}: Props) => (
    <Route
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        render={(props) => {
            if (auth?.isLoading) {
                return <p>is Loading</p>;
            }
            if (!auth?.isAuthenticated) {
                return <Redirect to="/login" />;
            }
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Component {...props} />;
        }}
    />
);
