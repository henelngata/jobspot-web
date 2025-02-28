"use client"
import FilterModal from '@/components/FilterModal'
import Job from '@/components/Job'
import { Input } from '@/components/ui/input'
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main>
       <section className="bg-cover bg-pattern text-white p-4" >
        <section className='flex justify-between items-center'>
            <p className=' text-sm'>Hi, Orlando Diggs</p>
        <Image
              src={"/images/Avatar.svg"}
              alt="Profile Avatar"
              className="rounded-full w-[50px] h-[50px] mb-2"
              width={40}
              height={40}
            />
        </section>
        <p className='text-lg mb-3'>Find your dream job<br/>here!</p>

        <section className='flex w-full justify-between items-center mb-3'>
            <section className='bg-white flex  rounded-xl w-[85%] place-content-center items-center p-1'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-[24px] h-[24px]' style={{color: "#b8bdc4",}} />
            <Input className='inline-block border-none text-["#b8bdc4"] text-sm' type='text' placeholder='Search'></Input>
            </section>
            <button
        onClick={() => setIsModalOpen(true)}

        aria-label="Open filters"
      >
        <FontAwesomeIcon icon={faSliders} className=' bg-bright-orange w-[30px] h-[30px] p-[5px] rounded-sm'/>
      </button>
      <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    </section>
    <section className='p-4'>
      <Job/>
      <Job/>
    </section>
    </main>
   
  )
}

export default page