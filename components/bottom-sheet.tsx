"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

export function BottomSheet({ isOpen, onClose, onOpen }: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <>
      <div
        className={cn(
          "relative bottom-0 left-0 right-0 bg-white rounded-t-[2rem] shadow-lg transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-y-0" : "translate-y-[calc(100%-2rem)]",
        )}
        ref={sheetRef}
      >
        {/* Pull-up indicator */}
        <div className="h-2 w-16 bg-gray-300 rounded-full mx-auto my-4 cursor-pointer" onClick={onOpen} />

        {/* Close button */}
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="p-8 pt-12">
          <h3 className="text-2xl font-bold text-[#1a1150] mb-3">What would you like to add?</h3>
          <p className="text-gray-600 mb-6">Would you like to post your tips and experiences or create a job?</p>
          <div className="space-y-4">
            <Link
              href="/post"
              className="block w-full bg-[#1a1150] hover:bg-[#15113e] text-white rounded-full py-6 text-center font-semibold"
            >
              POST
            </Link>
            <Link
              href="/create-job"
              className="block w-full bg-[#e8e5f7] hover:bg-[#d8d4f0] text-[#1a1150] rounded-full py-6 text-center font-semibold"
            >
              MAKE A JOB
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

