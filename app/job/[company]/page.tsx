"use client"

import React, { useState } from 'react';  
import Image from 'next/image';  
import ToggleView from '@/components/ToggleView';  
import CompanyHeader from '@/components/CompanyHeader';

const Description = () => {  
  // which is clicked and is active  
  const jobDescription = "This is an exciting opportunity for a software developer to work on cutting-edge projects..."
  const companyDescription = "Our company is a leader in innovative technology solutions, with a focus on..."

  return (  
    <main className=''>  
      <CompanyHeader />
      <ToggleView 
      jobDescription={jobDescription} 
      companyDescription={companyDescription}  />  
      
    </main>  
  );  
};  

export default Description;