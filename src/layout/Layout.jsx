import React from "react";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            {children}
            <Footer />
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