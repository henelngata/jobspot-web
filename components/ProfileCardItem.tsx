import { ChevronRight, Pencil, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProfileLinkItemProps {
  icon: React.ReactNode
  title: string
  content?: React.ReactNode
  onEdit?: () => void
  onAdd?: () => void
}

export function ProfileLinkItem({ icon, title, content, onEdit, onAdd }: ProfileLinkItemProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {content ? (
          <Button variant="ghost" size="sm" onClick={onEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="ghost" size="sm" onClick={onAdd}>
            <Plus className="h-4 w-4" />
          </Button>
        )}
      </div>
      {content && (
        <>
          <hr className="my-2" />
          <div className="mt-2">{content}</div>
        </>
      )}
    </div>
  )
}

