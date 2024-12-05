import { useRouter } from "next/navigation";
import React from "react";

type AppButtonProps = {
  onClick?: () => void;
  placeholder?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  to?: string;
  width?: string;
  radius?: string;
  textColor?: string;
  background?: string;
  className?: string;
  textClassName?: string;
  containerClassName?: string;
  borderWidth?: number;
};

const AppButton: React.FC<AppButtonProps> = ({
  onClick,
  placeholder,
  loading,
  disabled,
  background,
  textColor,
  to,
  className,
  textClassName,
  containerClassName,
}) => {
  const navigate = useRouter();

  return (
    <div className={containerClassName}>
      <button
        disabled={disabled}
        className={`w-full rounded-[4px] p-2 px-3 text-center font-semibold ${
          background ? background : "bg-[#0D6EFD]"
        } flex justify-center items-center gap-2 ${className} `}
        onClick={() => {
          if (to) {
            navigate.push(to);
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        <div
          className={`font-[Poppins-Light] text-[10px] tracking-[0.5px] ${
            textColor ? textColor : `text-white `
          } ${textClassName}`}
        >
          {placeholder}
        </div>
      </button>
    </div>
  );
};

export default AppButton;

/* const Spinner: React.FC = () => (
  <div
    className="animate-spin rounded-full h-4 w-4 border-2 border-t-orange-500 border-l-orange-500 border-r-gray-400 border-b-gray-400"
    style={{ transform: "translateZ(0)" }}
  />
);
 */
