import CompanyCard from '@/components/CompanyCard'
import React from 'react'

function page() {
  const companies = [
    { img: "faFacebook", name: "Facebook Inc", followers: 1000000 },
    { img: "faTwitter", name: "Twitter Inc", followers: 500000 },
    { img: "faInstagram", name: "Instagram LLC", followers: 750000 },
  ];
  return (
    <div className="grid grid-cols-2 p-2 justify-items-center gap-4">
      {companies.map((company, index) => (
        <CompanyCard
          key={index}
          img={company.img}
          name={company.name}
          followers={company.followers}
        />
      ))}
    </div>
  );
}

export default page
