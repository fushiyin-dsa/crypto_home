import styled from "styled-components";

export default function CrytpoList({ cryptos }) {
    return (
        <CryptoListStyle>
            {cryptos.map((crypto) => (
                <div key={crypto.id} className="crypto-item">
                    <div className="image"></div>
                    <div className="c">
                        <h2>
                            {crypto?.name} ({crypto?.symbol})
                        </h2>
                        <p>{crypto?.price}</p>
                    </div>
                </div>
            ))}
        </CryptoListStyle>
    );
}

export const CryptoListStyle = styled.div`
    display: grid;
    gap: 35px;
    grid-template-columns: repeat(7, 1fr);
    padding: 50px 315px;
    .crypto-item {
        display: flex;
        gap: 10px;
        align-items: center;
        .image {
            width: 50px;
            height: 50px;
            min-width: 50px;
            min-height: 50px;
            border-radius: 50%;
            background-color: #f4796c;
        }
        .txt {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }
`;
