"use client"

import { ProfileContent } from '@/components/profile/ProfileContent'
import ProfileCard from '@/components/ProfileCard'
import React from 'react'

const page = () => {
  // This would typically come from an API or state management
  const profileData = {
    aboutMe: "I'm a software developer with a passion for creating user-friendly applications.",
    workExperience: [
      { id: "1", title: "Senior Developer", company: "Tech Co", period: "2020 - Present" },
      { id: "2", title: "Junior Developer", company: "Startup Inc", period: "2018 - 2020" },
    ],
    education: [
      { id: "1", degree: "MSc Computer Science", school: "Tech University", period: "2016 - 2018" },
      { id: "2", degree: "BSc Computer Science", school: "State College", period: "2012 - 2016" },
    ],
    skills: ["PHP", "JavaScript", "CSS", "PHP", "JavaScript", "CSS","PHP", "JavaScript", "CSS"],
    resume: "john_doe_resume.pdf",
  }

  const urls = {
    addAboutMe: "/profile/edit/about-me",
    editAboutMe: "/profile/edit/about-me",
    addWorkExperience: "/profile/add/work-experience",
    editWorkExperience: (id: string) => `/profile/edit/work-experience/${id}`,
    addEducation: "/add/education",
    editEducation: (id: string) => `/profile/edit/education/${id}`,
    addSkills: "/profile/edit/skills",
    editSkills: "/profile/edit/skills",
    addResume: "/profile/add/resume",
    editResume: "/profile/edit/resume",
  }

  const handleDeleteResume = () => {
    console.log("Delete resume")
    // Implement resume deletion logic here
  }
  return (
    <main>
      <ProfileCard/>
      <ProfileContent {...profileData} urls={urls} onDeleteResume={handleDeleteResume} />
    </main>
  )
}

export default page
