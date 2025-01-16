import { Phone, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


interface ChatHeaderProps {
  name: string;
  avatarUrl: string;
  status: string;
}

export default function ChatHeader({
  name,
  avatarUrl,
  status,
}: ChatHeaderProps) {
  return (
    <div className="bg-white p-3 flex items-center">
      <Avatar className="h-10 w-10 mr-3">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h2 className="font-semibold text-sm text-dark-blue">{name}</h2>
        <p className="text-xs">{status}</p>
      </div>
      <button className="mx-2">
        <Phone size={18} style={{color:"#FF9228"}}  />
      </button>
      <button className="mx-2">
        <Search size={20} style={{color:"#FF9228"}} />
      </button>
    </div>
  );
}
