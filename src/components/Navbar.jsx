import { Heart, ShoppingBag, User } from "lucide-react";
import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
        <NavBarStyled className="">
            <div className="content flex justify-between w-full">
                <ul className="flex gap-10">
                    <li className="text-white">Home</li>
                    <li className="text-white">Products</li>
                    <li className="text-white">About Us</li>
                    <li className="text-white">Contact Us</li>
                </ul>
                <div className="user-actions flex gap-2">
                    <Heart size={20} color="#fff" />
                    <ShoppingBag size={20} color="#fff" />
                    <User size={20} color="#fff" /> 
                </div>
            </div>
        </NavBarStyled>
    );
}

export default Navbar;

export const NavBarStyled = styled.div`
    height: 70px;
    background-color: #183354;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content {
        max-width: 1290px;
        margin: 0 auto;
    }
`;
