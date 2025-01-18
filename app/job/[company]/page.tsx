"use client"

import React, { useState } from 'react';  
import ToggleView from '@/components/ToggleView';  
import CompanyHeader from '@/components/CompanyHeader';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Description = () => {  
  // which is clicked and is active  
  
  return (  
    <main className=''>  
      <CompanyHeader />
      <ToggleView jobId={''}   />  
      <section className='border-2 border-red-400 p-4 fixed'>
         <FontAwesomeIcon icon={faBookmark} style={{color:"#FCA34D"}} className="w-[18px]"/>
         <Link href={''} ></Link>
      </section>
    </main>  
  );  
};  

export default Description;