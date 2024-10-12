import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import  BackgroundColor from '../SideBarIcons/GlassBG/background_color';
import  BackgroundType  from "../SideBarIcons/bg_type";
import  PlainColors  from "../SideBarIcons/PlainBg/bg_color";
import  CardColor  from '../SideBarIcons/GlassBG/card_color';
import  Responses from '../SideBarIcons/responses';
import  Size from '../SideBarIcons/size'
import  Download  from '../SideBarIcons/download';
import  PostSize  from '../SideBarIcons/post_size';
import  TextColor  from '../SideBarIcons/PlainBg/text_colors';

const SideBar = () => {

  const { bgType,favicon } = useContext(AppContext)

  return (
    <div className='absolute top-0 left-0 h-screen w-24 m-0 
    flex flex-col shadow-lg z-20'>
      {
        bgType === 'Plain' ? <PlainColors /> : <BackgroundColor/>
      }
      <BackgroundType />
      {
        bgType === 'Glass' ? <CardColor /> : <TextColor />
      }
      <Responses />
      <Size />
      <PostSize />
      <Download />
    </div>
  )
}

export default SideBar
