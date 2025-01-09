interface MessageProps {
  text: string;
  sender: "user" | "other";
  timestamp: string;
}

export default function Message({ text, sender, timestamp }: MessageProps) {
  return (
    <div
      className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div className={``}>
        <p
          className={`max-w-xs lg:max-w-md xl:max-w-lg  rounded- p-3 shadow text-s ${
            sender === "user" ? "bg-dark-blue text-white" : "bg-pink"
          }`}
        >
          {text}
        </p>
        <p
          className={`text-xs mt-1 ${
            sender === "user" ? "text-end" : "text-start"
          }`}
        >
          {timestamp}
        </p>
      </div>
    </div>
  );
}
