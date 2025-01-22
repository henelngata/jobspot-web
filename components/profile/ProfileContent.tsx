import { AboutMeContent } from "./AboutMeContent"
import { WorkExperienceContent } from "./WorkExperienceContent"
import { EducationContent } from "./EducationContent"
import { SkillsContent } from "./SkillsContent"
import { ResumeContent } from "./ResumeContent"

interface ProfileContentProps {
  aboutMe: string
  workExperience: Array<{ id: string; title: string; company: string; period: string }>
  education: Array<{ id: string; degree: string; school: string; period: string }>
  skills: string[]
  resume: string | null
  urls: {
    addAboutMe: string
    editAboutMe: string
    addWorkExperience: string
    editWorkExperience: (id: string) => string
    addEducation: string
    editEducation: (id: string) => string
    addSkills: string
    editSkills: string
    addResume: string
    editResume: string
  }
  onDeleteResume: () => void
}

export function ProfileContent({
  aboutMe,
  workExperience,
  education,
  skills,
  resume,
  urls,
  onDeleteResume,
}: ProfileContentProps) {
  return (
    <div className="space-y-6 p-2 bg-[#F9F9F9]">
      <AboutMeContent content={aboutMe} addUrl={urls.addAboutMe} editUrl={urls.editAboutMe} />
      <WorkExperienceContent jobs={workExperience} addUrl={urls.addWorkExperience} editUrl={urls.editWorkExperience} />
      <EducationContent education={education} addUrl={urls.addEducation} editUrl={urls.editEducation} />
      <SkillsContent skills={skills} addUrl={urls.addSkills} editUrl={urls.editSkills} />
      <ResumeContent resume={resume} addUrl={urls.addResume} editUrl={urls.editResume} onDelete={onDeleteResume} />
    </div>
  )
}

