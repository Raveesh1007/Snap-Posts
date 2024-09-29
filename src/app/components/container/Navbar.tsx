import React from "react";
import SearchBox from "./Components/SearchBox";



const Navbar = () => {

    return (
        <div className="relative flex-grow justify-between mr-10 py-2 pl-28 z-10 sm:ml-24 ">
            <SearchBox />
        </div>
    )
}

export default Navbar;