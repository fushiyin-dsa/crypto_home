import React from "react";
import { LayoutStyled } from "./LayoutStyled";

function Footer() {
    return (
        <LayoutStyled className="w-full">
            <div className="footer">
                <div className="footer-content">
                    <div className="footer__about flex flex-col gap-5">
                        <div className="footer__logo text-white">LOGO</div>
                        <p className="text-white">
                            Browned butter and brown sugar caramelly goodness,
                            crispy edges thick and soft centers and melty little
                            puddles of chocolate.
                        </p>
                    </div>
                    <div className="footer__cols">
                        <div className="company flex flex-col gap-5">
                            <div className="title flex flex-col gap-4">
                                <h2 className="text-white">Company</h2>
                                <div className="divider"></div>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className="text-white">About Us</li>
                                <li className="text-white">The Test Kitchen</li>
                                <li className="text-white">Podcast</li>
                                <li className="text-white">Events</li>
                                <li className="text-white">Jobs</li>
                            </ul>
                        </div>
                        <div className="company flex flex-col gap-5">
                            <div className="title flex flex-col gap-4">
                                <h2 className="text-white">Company</h2>
                                <div className="divider"></div>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className="text-white">About Us</li>
                                <li className="text-white">The Test Kitchen</li>
                                <li className="text-white">Podcast</li>
                                <li className="text-white">Events</li>
                                <li className="text-white">Jobs</li>
                            </ul>
                        </div>
                        <div className="company flex flex-col gap-5">
                            <div className="title flex flex-col gap-4">
                                <h2 className="text-white">Company</h2>
                                <div className="divider"></div>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className="text-white">About Us</li>
                                <li className="text-white">The Test Kitchen</li>
                                <li className="text-white">Podcast</li>
                                <li className="text-white">Events</li>
                                <li className="text-white">Jobs</li>
                            </ul>
                        </div>
                        <div className="company flex flex-col gap-5">
                            <div className="title flex flex-col gap-4">
                                <h2 className="text-white">Company</h2>
                                <div className="divider"></div>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className="text-white">About Us</li>
                                <li className="text-white">The Test Kitchen</li>
                                <li className="text-white">Podcast</li>
                                <li className="text-white">Events</li>
                                <li className="text-white">Jobs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        <div className="text-white">Privacy Policy & Terms</div>
                        <div className="dot"></div>
                        <div className="text-white">Site Credits</div>
                    </div>
                    <div className="text-white">
                        © 2023 All Rights Reserved
                    </div>
                </div>
            </div>
        </LayoutStyled>
    );
}

export default Footer;
