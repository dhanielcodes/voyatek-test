import React, { ChangeEvent } from "react";

interface FormProps {
  onChange?: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  className?: string;
  containerClassName?: string;
  placeholder?: string;
  name?: string;
  icon?: any;
}

export default function FormInput({
  onChange,
  className,
  containerClassName,
  placeholder,
  name,
  icon,
}: FormProps) {
  return (
    <div
      className={`w-full bg-[#F0F2F5] flex font-medium ${containerClassName}`}
    >
      {icon && <div className="p-3 w-[30px]">{icon}</div>}
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={`w-full outline-none bg-transparent text-xs font-medium p-3 placeholder-gray-400 ${className}`}
      />
    </div>
  );
}
