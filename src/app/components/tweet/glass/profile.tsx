import Images from 'next/image';
import React from 'react';
import { BsTwitter } from 'react-icons/bs'
import { AppContext } from '../../../pages'
import { useContext } from 'react'
import { link } from 'fs'

const Profile = () => {

    const {cardColor, tweet} = useContext(AppContext);


    const textColor1 = cardColor === 'Dark' ? 'text-white' : 'text-grey-800';
    const textColor2 = cardColor === 'Light' ? 'text-grey-300' : 'text-grey-600'; 


    
}