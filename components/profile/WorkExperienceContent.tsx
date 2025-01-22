import { ProfileContentItem } from "./ProfileContentItem"
import { Briefcase, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Job {
  id: string
  title: string
  company: string
  period: string
}

interface WorkExperienceContentProps {
  jobs: Job[]
  addUrl: string
  editUrl: (id: string) => string
}

export function WorkExperienceContent({ jobs, addUrl, editUrl }: WorkExperienceContentProps) {
  const isEmpty = jobs.length === 0

  return (
    <ProfileContentItem
      icon={<Briefcase style={{color:"#FF9D40"}} className="h-5 w-5" />}
      title="Work Experience"
      addUrl={addUrl}
      isEmpty={isEmpty}
    >
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="flex justify-between items-start">
            <div>
              <h4 className="font-bold mb-1 text-sm">{job.title}</h4>
              <p className="text-[12px] text-gray-600">{job.company}</p>
              <p className="text-[12px] text-gray-500">{job.period}</p>
            </div>
            <Link href={editUrl(job.id)}>
              <Button variant="ghost" size="sm">
                <Pencil style={{color:"#FF9D40"}} className="h-4 w-4" />
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </ProfileContentItem>
  )
}

