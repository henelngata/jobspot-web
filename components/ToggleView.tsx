'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import JobDescription from './JobDescription'
import AboutUs from './AboutUs';


interface DescriptionToggleProps {
  jobId: string;
}

export default function ToggleView({ jobId }: DescriptionToggleProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'company'>('description')

  const getButtonClass = (tab: 'description' | 'company') => {
    return `px-4 <py-4></py-4> rounded-md transition-colors w-[45%] ${
      activeTab === tab
        ? 'bg-dark-blue text-white'
        : 'bg-brand-purple text-secondary-foreground hover:bg-secondary/80'
    }`
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 place-content-center">
        <Button
          className={getButtonClass('description')}
          onClick={() => setActiveTab('description')}
        >
          Description
        </Button>
        <Button
          className={getButtonClass('company')}
          onClick={() => setActiveTab('company')}
        >
          Company
        </Button>
      </div>
      <div className={`p-4 rounded-md ${
        activeTab === 'description' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
      }`}>
        {activeTab === 'description' 
          ? <JobDescription  />
          : <AboutUs/>
        }
      </div>
    </div>
  )
}

