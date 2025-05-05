import React from "react";
import { useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { ArrowBigRightIcon, Calendar } from "lucide-react";

function RecentPost() {
    const CONTENT = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            topic: "Market",
            date: "2023-10-01",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "2023-10-01",
            topic: "Bitcoin",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "2023-10-01",
            topic: "Economy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "2023-10-01",
            topic: "News",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "2023-10-01",
            topic: "Crypto",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://via.placeholder.com/150",
        },
    ];
    const [tabs, setTabs] = useState("latest");
    const handleTabs = (tab) => {
        setTabs(tab);
    };
    const buttonsTab = [
        { name: "Latest News", value: "latest", onclick: handleTabs },
        { name: "Features", value: "features", onclick: handleTabs },
    ];
    return (
        <RecentPostStyled>
            <div className="grid-view">
                <div className="flex justify-between align-center">
                    <span className="text-[28px] text-[#183354] font-[700]">
                        Recent Posts
                    </span>
                    <button className="flex gap-1 py-2 px-3 border-[1px] border-[#CFCFCF] rounded-[3px] align-center justify-center">
                        <span className="uppercase font-[500]">View All</span>
                    </button>
                </div>
            </div>
            <div className="list-view flex flex-col gap-8">
                <div className="tabs">
                    {buttonsTab.map((button) => (
                        <button
                            key={button.value}
                            className={classNames(
                                "px-4 py-2 text-[18px] font-[800]",
                                {
                                    active: tabs === button.value,
                                    "rounded-s-lg": button.value === "latest",
                                    "rounded-e-lg": button.value === "features",
                                }
                            )}
                            onClick={() => button.onclick(button.value)}
                        >
                            {button.name}
                        </button>
                    ))}
                </div>
                <div className="list-view__content flex flex-col">
                    {CONTENT?.splice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="flex gap-4 border-b-[1px] border-[#0000001A] pb-4"
                        >
                            <div className="w-[110px] h-[110px] image bg-[#0000001A]"></div>
                            <div className="flex flex-col gap-2">
                                <div className="border-[1px] border-[#B8C1CD] rounded-[3px] px-1 w-max h-max text-[#6D757F]">
                                    {item.topic}
                                </div>
                                <h2 className="text-[18px] font-[700] text-[#183354]">
                                    {item.title}
                                </h2>
                                <div className="flex gap-1 align-center">
                                    <Calendar size={16} color="#6D757F" />
                                    <span className="text-[13px] font-[600] uppercase text-[#6D757F]">
                                        {item.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </RecentPostStyled>
    );
}

export default RecentPost;

const RecentPostStyled = styled.div`
    display: grid;
    grid-template-columns: auto 330px;
    gap: 55px;
    padding: 0 315px;
    .tabs {
        button {
            padding: 10px 20px;
            background-color: #f4796c;
            border: none;
            cursor: pointer;
            color: #183354;
            background-color: #f9f9f7;
            &.active {
                background-color: #f4796c;
                color: #fff;
            }
        }
    }
    .list-view {
        &__content {
            gap: 29px;
            .image {
                min-height: 110px;
                min-width: 110px;
            }
        }
    }
`;
