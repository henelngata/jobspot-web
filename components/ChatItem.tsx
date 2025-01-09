import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ConversationItemProps {
  name: string
  lastMessage: string
  time: string
  unread: number
}

export default function ChatItem({ name, lastMessage, time, unread }: ConversationItemProps) {
  return (
    <div className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
      <Avatar className="h-12 w-12">
        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-baseline">
          <h2 className="text-lg font-semibold">{name}</h2>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-gray-600 truncate">{lastMessage}</p>
      </div>
      {unread > 0 && (
        <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {unread}
        </div>
      )}
    </div>
  )
}
