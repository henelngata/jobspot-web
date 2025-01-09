import React from "react";

interface InputTextProps {
  type: string;
  label: string;
  name: string;
  id: any;
  placeholder: any;
}

const InputText: React.FC<InputTextProps> = ({
  type,
  label,
  name,
  id,
  placeholder,
}) => {
  return (
    <section className="mb-2">
      <label
        className="block text-xs font-bold text-dark-blue mb-1 capitalize"
        htmlFor="email"
      >
        {label}
      </label>
      <input
        className="p-4 relative w-full rounded-sm bg-white   text-xs text-deep-purple"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
      />
    </section>
  );
};

export default InputText;
