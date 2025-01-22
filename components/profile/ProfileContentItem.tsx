import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Pencil } from "lucide-react"
import Link from "next/link"

interface ProfileContentItemProps {
  icon: ReactNode
  title: string
  addUrl: string
  editUrl?: string
  isEmpty: boolean
  children?: ReactNode
}

export function ProfileContentItem({ icon, title, addUrl, editUrl, isEmpty, children }: ProfileContentItemProps) {
  return (
    <div className="mb-6 bg-white p-4 rounded-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="text-sm font-bold">{title}</h3>
        </div>
        {isEmpty ? (
          <Link href={addUrl}>
            <button  className=" flex place-content-center items-center rounded-full h-[24px] w-[24px] bg-orange-light">
              <Plus style={{color:"#FF9D40"}} className="h-4 w-4" />
            </button>
          </Link>
        ) : editUrl ? (
          <Link href={editUrl}>
            <Button variant="ghost" size="sm">
              <Pencil style={{color:"#FF9D40"}} className="h-4 w-4" />
            </Button>
          </Link>
        ) : null}
      </div>
      {!isEmpty && (
        <>
          <hr className="my-2" />
          <div className="mt-2">{children}</div>
        </>
      )}
    </div>
  )
}

