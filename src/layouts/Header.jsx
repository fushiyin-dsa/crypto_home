import { Search, Heart, ShoppingBag, User } from "lucide-react";
import SvgIcon from "../components/svgIcon";
import { LayoutStyled } from "./LayoutStyled";

export default function Header() {
    return (
        <LayoutStyled className="w-full">
            <div className="header-content header flex flex-row items-center content-center justify-center">
                <div className="search-bar flex gap-2 flex-1">
                    <Heart size={20} color="#fff" />
                    <ShoppingBag size={20} color="#fff" />
                </div>
                <div className="logo flex-1 text-white">LOGO</div>
                <div className="user-actions flex gap-2">
                    <Heart size={20} color="#fff" />
                    <ShoppingBag size={20} color="#fff" />
                    <User size={20} color="#fff" />
                </div>
            </div>
        </LayoutStyled>
    );
}
