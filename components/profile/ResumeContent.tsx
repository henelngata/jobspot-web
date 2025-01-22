import { ProfileContentItem } from "./ProfileContentItem"
import { FileText, Trash2, FileIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeContentProps {
  resume: string | null
  addUrl: string
  editUrl: string
  onDelete: () => void
}

export function ResumeContent({ resume, addUrl, editUrl, onDelete }: ResumeContentProps) {
  const isEmpty = !resume

  return (
    <ProfileContentItem
      icon={<FileText style={{color:"#FF9D40"}} className="h-5 w-5" />}
      title="Resume"
      addUrl={addUrl}
      editUrl={editUrl}
      isEmpty={isEmpty}
    >
      {resume && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-600">{resume}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onDelete}>
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      )}
    </ProfileContentItem>
  )
}

