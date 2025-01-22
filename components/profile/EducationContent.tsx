import { ProfileContentItem } from "./ProfileContentItem"
import { GraduationCap, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Education {
  id: string
  degree: string
  school: string
  period: string
}

interface EducationContentProps {
  education: Education[]
  addUrl: string
  editUrl: (id: string) => string
}

export function EducationContent({ education, addUrl, editUrl }: EducationContentProps) {
  const isEmpty = education.length === 0

  return (
    <ProfileContentItem
      icon={<GraduationCap style={{color:"#FF9D40"}} className="h-5 w-5" />}
      title="Education"
      addUrl={addUrl}
      isEmpty={isEmpty}
    >
      <ul className="space-y-4">
        {education.map((edu) => (
          <li key={edu.id} className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-sm">{edu.degree}</h4>
              <p className="text-xs text-gray-600 mb-1">{edu.school}</p>
              <p className="text-xs text-gray-500">{edu.period}</p>
            </div>
            <Link href={editUrl(edu.id)}>
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

