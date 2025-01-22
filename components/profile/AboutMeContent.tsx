import { ProfileContentItem } from "./ProfileContentItem"
import { User } from "lucide-react"

interface AboutMeContentProps {
  content: string
  addUrl: string
  editUrl: string
}

export function AboutMeContent({ content, addUrl, editUrl }: AboutMeContentProps) {
  const isEmpty = !content

  return (
    <ProfileContentItem
      icon={<User style={{color:"#FF9D40"}} className="h-5 w-5" />}
      title="About Me"
      addUrl={addUrl}
      editUrl={editUrl}
      isEmpty={isEmpty}
    >
      <p className="text-sm text-gray-600">{content}</p>
    </ProfileContentItem>
  )
}

