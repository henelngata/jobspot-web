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
          className={`max-w-xs lg:max-w-md xl:max-w-lg  rounded- p-4 text-sm  ${
            sender === "user"
              ? "bg-dark-blue text-white rounded-s-2xl rounded-tr-2xl"
              : "bg-pink-light  rounded-e-2xl rounded-tl-2xl "
          }`}
        >
          {text}
        </p>
        <p
          className={`text-[10px] text-lavender-gray mt-1 ${
            sender === "user" ? "text-end" : "text-start"
          }`}
        >
          {timestamp}
        </p>
      </div>
    </div>
  );
}
