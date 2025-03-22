import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>My Website</title>
            </Head>
            <main>{children}</main>
        </>
    );
};

export default Layout;
