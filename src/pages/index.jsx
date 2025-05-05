import CrytpoList from "../components/CryptoList";
import CryptoPaper from "../components/CryptoPaper";
import Layout from "../components/layout";
import NewLetter from "../components/NewLetter";
import RecentPost from "../components/RecentPost";
import { DATA } from "../constant/data";

const Home = () => {
    const CRYPTO_LIST = [
        {
            id: 1,
            name: "Bitcoin",
            price: 50000,
            change: -5,
            src: "./assets/images/image1.png",
        },
        {
            id: 2,
            name: "Ethereum",
            price: 4000,
            change: 3,
        },
        {
            id: 3,
            name: "Litecoin",
            price: 200,
            change: -1,
        },
    ];
    return (
        <Layout>
            <div>
                <CrytpoList cryptos={DATA} />
                <CryptoPaper list={CRYPTO_LIST} />
                <div className="text-center w-full flex justify-center py-14">
                    <img src="public/Link.png" alt="" />
                </div>
                <RecentPost></RecentPost>
                <NewLetter></NewLetter>
            </div>
        </Layout>
    );
};

export default Home;
