import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const SiteLogo = () => {

    const { favicon } = useContext(AppContext)
  return (
    <div className='absolute bottom-2 items-center hidden sm:flex right-1/2'>
      <p>
        <span className='text-2xl px-2 font-semi-bold'>Snap-Posts</span>
      </p>
    </div>
  )
}

export default SiteLogo
