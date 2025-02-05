"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {  Search, Sliders } from "lucide-react"
import { BottomSheet } from "@/components/bottom-sheet"
import { useState } from "react"

export default function HeaderCard() {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true)
  return (
    <>
    <Card className="relative overflow-hidden mb-8 bg-dark-blue">
     

      <div className="relative bg-pattern p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 ">
          <div>
            <h1 className="text-sm font-semibold mb-1 text-white">Hi, Orlando Diggs</h1>
            <h2 className="text-base font-bold mb-6 text-white">Find your dream job here!</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
            </div>
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Creat%20Job%20or%20Post.jpg-5mru29XUgDnkStPoAqv5H0aHMgrgWE.jpeg"
                alt="Profile"
              />
            </Avatar>
          </div>
        </div>

        {/* Search */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input placeholder="Search" className="pl-10 bg-white rounded-full h-14 text-black" />
          </div>
          <Button size="icon" className="h-14 w-14 rounded-2xl bg-[#ff9f43] hover:bg-[#f39337]">
            <Sliders className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </Card>
    <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)} />
    </>
  )
}

