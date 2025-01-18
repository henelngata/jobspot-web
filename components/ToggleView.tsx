'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface DescriptionToggleProps {
  jobDescription: string
  companyDescription: string
}

export default function ToggleView({ jobDescription, companyDescription }: DescriptionToggleProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'company'>('description')

  const getButtonClass = (tab: 'description' | 'company') => {
    return `px-4 py-2 rounded-md transition-colors ${
      activeTab === tab
        ? 'bg-primary text-primary-foreground'
        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
    }`
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
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
        {activeTab === 'description' ? jobDescription : companyDescription}
      </div>
    </div>
  )
}

