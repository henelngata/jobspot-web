import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CompanyCardProps{
  img: any,
  name: string,
  followers: number,

}
const CompanyCard: React.FC<CompanyCardProps> = ({ img, name, followers })=> {
  return (
    <Link href="/connections/company" className="">
      <section className="border-2 border-red-950 px-5 py-3 rounded-lg flex-row-reverse justify-items-center">
        <Image
          src={"/images/facebook.png"}
          width={46}
          height={46}
          alt={`logo of ${name}`}
        />
        <p className='font-bold text-[14px] my-2'>{name }</p>
        <p className='font-normal text-[12px] text-lavender-gray mb-2'>{`${followers } followers`}</p>
        <button className='border-[1px] border-lavender-gray px-6 py-1 rounded-xl text-[12px]'>follow</button>
      </section>
    </Link>
  );
}

export default CompanyCard
