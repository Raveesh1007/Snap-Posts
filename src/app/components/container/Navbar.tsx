import React from 'react'
import SearchBox from '../../components/tweet/search_box'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'


const Navbar = () => {


  return (
    <div className='relative flex-grow flex justify-end mr-10 py-2 pl-28 z-10 sm:ml-0 ml-24'>
      <SearchBox />
    </div>
  )

}

export default Navbar
