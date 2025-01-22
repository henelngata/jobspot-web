import { useState } from "react"
import { ProfileContentItem } from "./ProfileContentItem"
import { Code } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SkillsContentProps {
  skills: string[]
  addUrl: string
  editUrl: string
}

export function SkillsContent({ skills, addUrl, editUrl }: SkillsContentProps) {
  const isEmpty = skills.length === 0
  const [showAll, setShowAll] = useState(false)

  const displayedSkills = showAll ? skills : skills.slice(0, 6)

  return (
    <ProfileContentItem
      icon={<Code style={{color:"#FF9D40"}} className="h-5 w-5" />}
      title="Skills"
      addUrl={addUrl}
      editUrl={editUrl}
      isEmpty={isEmpty}
    >
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 ">
        {displayedSkills.map((skill, index) => (
          <span key={index} className="bg-gray-100 text-center text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
      {skills.length > 6 && (
        <Button variant="link" onClick={() => setShowAll(!showAll)} className="mt-2">
          {showAll ? "Show Less" : "Show More"}
        </Button>
      )}
    </ProfileContentItem>
  )
}

