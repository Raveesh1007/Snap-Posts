import React from 'react';
import { BsFileFontFill, BsFileFont } from 'react-icons/bs';
import { useContext } from 'react';
import { AppContext } from '@/pages';


function setFont(isFont: boolean) {
    if(isFont){
        console.log('Large');
        return "sm:text-xl text:md";
    } else {
        console.log('small');
        return "sm:text-md text:sm";
    }
}

const Size = () =>{

    const {fontSize, setFontSize} = useContext(AppContext);

    return(
        <div className = "sideBar_icon flex-col">
            <label className = "swap">
            
        <input type = "checkbox"

        onChange={(e) =>{
            setFontSize(e.target.checked);
        }}
        />

        <BsFileFontFill className='swap-on fill-current w-6 h-6 text-slate-500' />
        <BsFileFont className='swap-off fill-current w-6 h-6 text-slate-500' />
        </label>
        <p className='icon_text mt-1'>
            Font
        </p>
        </div>
    )
}

export default Size;