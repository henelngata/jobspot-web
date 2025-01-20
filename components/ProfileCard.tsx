"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Pencil, Briefcase, Code, FileText, GraduationCap, User } from "lucide-react"
import Image from "next/image"
import { ProfileLinkItem } from "./ProfileCardItem"
import { AboutMeContent, WorkExperienceContent, EducationContent, SkillsContent, ResumeContent } from "./ProfileContentItems"

export default function ProfileCard() {
  const aboutMe =
   ""
  const workExperience = [
    { name: "Senior Developer", company: "Tech Solutions Inc.", period: "Jan 2020 - Present" },
    { name: "Junior Developer", company: "StartUp Co.", period: "Jun 2018 - Dec 2019" },
  ]
  const education = [
    { degree: "M.S. Computer Science", school: "Tech University", period: "2016 - 2018" },
    { degree: "B.S. Computer Science", school: "State College", period: "2012 - 2016" },
  ]
  const skills = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"]
  const resume = "John_Doe_Resume_2023.pdf"
  return (
    <>
    <Card className="bg-cover bg-pattern  " >
      <CardContent>
        <div className="relative">
          <Settings className="relative left-[100%] h-6 w-6 text-white" />
          <div className="flex flex-col ">
            <Image
              src={"/images/Avatar.svg"}
              alt="Profile Avatar"
              className="rounded-full w-[50px] h-[50px] mb-2"
              width={50}
              height={50}
            />
            <h2 className="text-sm text-white font-medium mb-1">John Doe</h2>
            <p className="text-xs text-white font-regular mb-4">New York, USA</p>
            <div className="flex justify-between items-center w-full mb-4">
              <p className="font-semibold text-sm text-white">120k <span className="text-xs">Followers</span></p>
              <p className="font-semibold  text-sm text-white">120k <span className="text-xs">Following</span></p>
              <Button variant="outline" className="flex items-center gap-1 text-xs">
                <Pencil className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
        <CardContent className="pt-6">
          <ProfileLinkItem
            icon={<User className="h-5 w-5" />}
            title="About Me"
            content={<AboutMeContent content={aboutMe} />}
            onEdit={() => console.log("Edit About Me")}
          />
          <ProfileLinkItem
            icon={<Briefcase className="h-5 w-5" />}
            title="Work Experience"
            content={<WorkExperienceContent jobs={workExperience} />}
            onEdit={() => console.log("Edit Work Experience")}
          />
          <ProfileLinkItem
            icon={<GraduationCap className="h-5 w-5" />}
            title="Education"
            content={<EducationContent education={education} />}
            onEdit={() => console.log("Edit Education")}
          />
          <ProfileLinkItem
            icon={<Code className="h-5 w-5" />}
            title="Skills"
            content={<SkillsContent skills={skills} />}
            onEdit={() => console.log("Edit Skills")}
          />
          <ProfileLinkItem
            icon={<FileText className="h-5 w-5" />}
            title="Resume"
            content={<ResumeContent name={resume} onDelete={() => console.log("Delete Resume")} />}
            onEdit={() => console.log("Edit Resume")}
          />
        </CardContent>
      </Card>
    </>
  )
}

