import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
import logoBookingWhite from "../assets/logoBookingWhite.svg"
const styleNav = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 20,
};
export default function Header() {
    return(
        <Navbar variant="gradient" 
        className="h-auto max-w-full rounded-b-lg bg-blue-500 px-4 md:px-8 border-none" 
        style={styleNav}>
            <div className="flex flex-row justify-between flex-wrap items-center">
                <div className="flex gap-5 h-max items-center">
                    <div className="w-32 h-max">
                        <img src={logoBookingWhite}  alt="RUT_logo" />
                    </div>
                    
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <div className="w-14 items-center max-h-fit">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6 text-white">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    </div>
                </div>
            </div>
        </Navbar>
    )
}
