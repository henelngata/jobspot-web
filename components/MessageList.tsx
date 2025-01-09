"use client";

import { useState, useEffect } from "react";
import Message from "./Message";

interface MessageType {
  id: number;
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

export default function MessageList() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    // Simulating fetching messages
    setMessages([
      {
        id: 1,
        text: "Hey, how are you?",
        sender: "other",
        timestamp: "10:00 AM",
      },
      {
        id: 2,
        text: "I'm good, thanks! How about you?",
        sender: "user",
        timestamp: "10:02 AM",
      },
      {
        id: 3,
        text: "I'm doing well. Did you finish the project?",
        sender: "other",
        timestamp: "10:05 AM",
      },
      {
        id: 4,
        text: "Yes, I just submitted it. How about yours?",
        sender: "user",
        timestamp: "10:07 AM",
      },
      {
        id: 5,
        text: "Still working on it. Need some help?",
        sender: "other",
        timestamp: "10:10 AM",
      },
    ]);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
}
