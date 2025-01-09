"use client";

import { useState, useRef } from "react";
import { Send, Paperclip, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || file) {
      console.log("Sending message:", message);
      console.log("Sending file:", file);
      setMessage("");
      setFile(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-4 flex items-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
        variant="ghost"
        size="icon"
        type="button"
        className="text-gray-500"
        onClick={triggerFileInput}
      >
        <Paperclip size={24} />
      </Button>
      <Input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 mx-2 bg-white"
      />
      {file && (
        <span className="mr-2 text-sm text-gray-600">File: {file.name}</span>
      )}
      {message.trim() || file ? (
        <Button
          type="submit"
          size="icon"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          <Send size={24} />
        </Button>
      ) : (
        <Button
          type="button"
          size="icon"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          <Mic size={24} />
        </Button>
      )}
    </form>
  );
}
