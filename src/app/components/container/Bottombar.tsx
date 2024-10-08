import React from 'react'
import  BackgroundType  from '../SideBarIcons/bg_type'
import BackgroundColor from '../SideBarIcons/GlassBG/background_color'
import CardColor from '../SideBarIcons/GlassBG/card_color'
const BottomBar = () => {
  return (
    <div className='fixed left-0 right-0 bottom-16 flex justify-center z-20 pointer-events-none mobile-command-bar-bottom-position-first'>
      <div className='flex items-center justify-center
       bg-slate-50 dark:bg-slate-900
        rounded-xl shadow-lg pointer-events-auto p-3 '>    
        <BackgroundType />    
        <BackgroundColor />
        <CardColor />   
    </div> 
    </div>
  )
}

export default BottomBar
