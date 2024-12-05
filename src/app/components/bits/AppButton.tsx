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
  width = "100%",
}) => {
  const navigate = useRouter();

  return (
    <div className={`w-[${width}]`}>
      <button
        disabled={disabled}
        className={`w-full aspect-[5/2] rounded-[4px] p-2 px-3 text-center text-sm font-semibold ${
          background ? background : "bg-[#0D6EFD]"
        } flex justify-center items-center gap-2`}
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
          className={
            textColor
              ? textColor
              : `text-white font-[Poppins-ExtraLight] text-[11px] tracking-[2px]`
          }
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
