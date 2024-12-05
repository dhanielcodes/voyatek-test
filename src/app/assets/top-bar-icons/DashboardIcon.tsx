import React from "react";

interface SvgProp {
  active?: string;
}
export default function DashboardIcon({ active }: SvgProp) {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0002 14.5538C13.1522 14.466 13.2785 14.3397 13.3663 14.1876C13.454 14.0356 13.5002 13.8631 13.5002 13.6875V4.6875C13.4993 4.52807 13.4603 4.37116 13.3864 4.22986C13.3126 4.08857 13.206 3.96698 13.0756 3.87524C12.9452 3.7835 12.7948 3.72426 12.6368 3.70248C12.4789 3.68069 12.318 3.69699 12.1677 3.75C9.24891 4.78302 6.79433 6.8233 5.2452 9.50409C3.69608 12.1849 3.15401 15.3303 3.71643 18.375C3.74559 18.5324 3.81212 18.6806 3.91044 18.807C4.00876 18.9333 4.13599 19.0343 4.28143 19.1012C4.4125 19.1625 4.55549 19.1941 4.70018 19.1938C4.8757 19.1938 5.04814 19.1477 5.20018 19.06L13.0002 14.5538ZM11.5002 6.2025V13.11L5.51518 16.5637C5.50018 16.375 5.50018 16.185 5.50018 16C5.50196 13.973 6.06305 11.9857 7.12168 10.2571C8.1803 8.5284 9.69541 7.12539 11.5002 6.2025ZM27.7927 9.565C27.7814 9.5425 27.7702 9.51875 27.7564 9.49625C27.7427 9.47375 27.7314 9.455 27.7177 9.435C26.5715 7.47725 24.9332 5.85335 22.9654 4.72451C20.9976 3.59567 18.7688 3.00116 16.5002 3C16.235 3 15.9806 3.10536 15.7931 3.29289C15.6055 3.48043 15.5002 3.73478 15.5002 4V15.4788L5.64893 21.2162C5.53462 21.2825 5.43457 21.3708 5.35457 21.4759C5.27456 21.5811 5.2162 21.7011 5.18284 21.8289C5.14948 21.9568 5.14179 22.09 5.16022 22.2208C5.17864 22.3517 5.22281 22.4776 5.29018 22.5912C6.73552 25.0525 8.95069 26.9696 11.5938 28.0468C14.237 29.1241 17.1612 29.3015 19.9152 28.5517C22.6692 27.8019 25.0999 26.1666 26.8321 23.8982C28.5644 21.6297 29.502 18.8542 29.5002 16C29.5031 13.7427 28.9143 11.524 27.7927 9.565ZM17.5002 5.045C19.0862 5.19099 20.6216 5.67945 22.0004 6.47666C23.3793 7.27387 24.5686 8.36083 25.4864 9.6625L17.5002 14.3138V5.045ZM16.5002 27C14.7545 26.9955 13.0346 26.5777 11.4814 25.7808C9.92815 24.9839 8.58571 23.8305 7.56393 22.415L16.9889 16.9263L17.0164 16.9088L26.4877 11.3925C27.2608 13.0684 27.5997 14.9119 27.4733 16.7532C27.3469 18.5945 26.7593 20.3745 25.7645 21.929C24.7697 23.4836 23.3997 24.7629 21.7807 25.6491C20.1617 26.5353 18.3458 26.9998 16.5002 27Z"
        fill={active ? "#344054" : "#667185"}
      />
    </svg>
  );
}
