import React from "react";
import {Header} from "./Header/Header";

const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export const withLayout = (Component) => {

    return function withLayoutComponent() {
        return (
            <Layout>
                <Component />
            </Layout>
        );
    };
};