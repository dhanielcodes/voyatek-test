import React from "react";

interface FormProps {
  onChange?: () => void;
}

export default function FormInput({ onChange }: FormProps) {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        className={`w-full outline-none bg-[#F0F2F5] text-base font-[Poppins-Medium] p-3 placeholder-gray-400`}
      />
    </div>
  );
}
