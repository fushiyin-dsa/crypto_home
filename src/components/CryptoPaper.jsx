import { Calendar, Clock, User } from "lucide-react";
import React from "react";
import styled from "styled-components";

function CryptoPaper({ list }) {
    return (
        <CryptoPaperStyled>
            {list?.map((crypto) => (
                <div
                    key={crypto.id}
                    className="crypto-item flex justify-center"
                >
                    <div className="image bg-linear-to-t from-[#00050BE3] to-[#0A17292E]"></div>
                    <div className="content text-center">
                        <button className="bg-[#F4796C] text-white px-2 py-1">
                            NEWS
                        </button>
                        <p className="title text-white text-[28px] font-[700] mt-3">
                            Accessible Target Sizes Cheatsheet
                        </p>
                        <div className="flex gap-4 justify-center mt-5">
                            <div className="flex gap-1">
                                <User size={16} color="#fff" />
                                <div className="author text-white text-[13px] font-[400]">
                                    By ADMIN
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Calendar size={16} color="#fff" />
                                <div className="date text-white text-[13px] font-[400]">
                                    27 August, 2024
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Clock size={16} color="#fff" />
                                <div className="since text-white text-[13px] font-[400]">
                                    20 Mins
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </CryptoPaperStyled>
    );
}

export default CryptoPaper;

const CryptoPaperStyled = styled.div`
    display: grid;
    gap: 35px;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    padding: 0 35px;
    .image {
        width: 100%;
        height: 422px;
    }
    .content {
        position: absolute;
        bottom: 55px;
    }
`;
