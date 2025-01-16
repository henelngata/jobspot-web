"use client";

import { useState } from "react";
import ChatItem from "./ChatItem";
import Link from "next/link";


// Dummy data for conversations
const initialConversations = [
  {
    id: 1,
    name: "Alice",
    lastMessage: "Hey, how are you?",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Bob",
    lastMessage: "Can we meet tomorrow?",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Charlie",
    lastMessage: "Thanks for the help!",
    time: "Tuesday",
    unread: 1,
  },
  {
    id: 4,
    name: "David",
    lastMessage: "See you later!",
    time: "Monday",
    unread: 0,
  },
];

export default function ChatList() {
  const [conversations] = useState(initialConversations);

  return (
    <div className="overflow-y-auto">
      {conversations.map((conversation) => (
        <Link href={"/chat"}>
          <ChatItem key={conversation.id} {...conversation} />
        </Link>
      ))}
    </div>
  );
}
