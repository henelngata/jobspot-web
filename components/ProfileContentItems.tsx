import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutMeContent({ content }: { content: string }) {
  return <p className="text-sm text-gray-600">{content}</p>
}

export function WorkExperienceContent({ jobs }: { jobs: { name: string; company: string; period: string }[] }) {
  return (
    <ul className="space-y-2">
      {jobs.map((job, index) => (
        <li key={index} className="text-sm">
          <div className="font-medium">{job.name}</div>
          <div className="text-gray-600">{job.company}</div>
          <div className="text-gray-500">{job.period}</div>
        </li>
      ))}
    </ul>
  )
}

export function EducationContent({ education }: { education: { degree: string; school: string; period: string }[] }) {
  return (
    <ul className="space-y-2">
      {education.map((edu, index) => (
        <li key={index} className="text-sm">
          <div className="font-medium">{edu.degree}</div>
          <div className="text-gray-600">{edu.school}</div>
          <div className="text-gray-500">{edu.period}</div>
        </li>
      ))}
    </ul>
  )
}

export function SkillsContent({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {skill}
        </span>
      ))}
    </div>
  )
}

export function ResumeContent({ name, onDelete }: { name: string; onDelete: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">{name}</span>
      <Button variant="ghost" size="sm" onClick={onDelete}>
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  )
}

