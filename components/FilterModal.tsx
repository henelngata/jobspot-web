"use client"

import { useState, type FormEvent } from "react"

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [location, setLocation] = useState("")
  const [salary, setSalary] = useState(50000)
  const [jobType, setJobType] = useState<string[]>([])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ category, subCategory, location, salary, jobType })
    // Close the modal after submission
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#F9F9F9] p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4 text-center text-black">Filter Jobs</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-dark-blue">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
            />
          </div>
          <div>
            <label htmlFor="subCategory"  className="block text-sm font-medium text-dark-blue">
              Sub Category
            </label>
            <input
              type="text"
              id="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className=" p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-black"
            />
          </div>
          <div>
            <label htmlFor="location"  className="block text-sm font-medium text-dark-blue">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50  text-black"
            />
          </div>
          <div>
            <label htmlFor="salary"  className="block text-sm font-medium text-dark-blue">
              Salary
            </label>
            <input
              type="range"
              id="salary"
              min="0"
              max="200000"
              step="1000"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">${salary.toLocaleString()}</span>
          </div>
          <div>
            <span className="block text-sm font-medium text-dark-blue mb-2">Job Type</span>
            <div className="space-x-4">
              {["Full Time", "Part Time", "Remote"].map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={type}
                    checked={jobType.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setJobType([...jobType, type])
                      } else {
                        setJobType(jobType.filter((t) => t !== type))
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-dark-blue text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

