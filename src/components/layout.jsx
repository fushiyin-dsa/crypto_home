import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer />
        </>
    );
}
