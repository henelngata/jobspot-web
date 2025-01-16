import ChatHeader from "@/components/ChatHeader";
import MessageInput from "@/components/MessageInput";
import MessageList from "@/components/MessageList";


 function ChatPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatHeader
        name="John Doe"
        avatarUrl="/placeholder.svg?height=40&width=40"
        status="online"
      />
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default ChatPage;