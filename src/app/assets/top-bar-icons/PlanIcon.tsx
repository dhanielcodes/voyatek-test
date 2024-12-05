import React from "react";

interface SvgProp {
  active?: string;
}
export default function PlanIcon({ active }: SvgProp) {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2081 13.2921C12.301 13.385 12.3748 13.4952 12.4251 13.6166C12.4754 13.738 12.5013 13.8682 12.5013 13.9996C12.5013 14.131 12.4754 14.2611 12.4251 14.3825C12.3748 14.5039 12.301 14.6142 12.2081 14.7071L8.20806 18.7071C8.11518 18.8001 8.00489 18.8738 7.8835 18.9241C7.7621 18.9745 7.63197 19.0004 7.50056 19.0004C7.36914 19.0004 7.23901 18.9745 7.11762 18.9241C6.99622 18.8738 6.88593 18.8001 6.79306 18.7071L4.79306 16.7071C4.70015 16.6142 4.62645 16.5039 4.57616 16.3825C4.52588 16.2611 4.5 16.131 4.5 15.9996C4.5 15.7342 4.60542 15.4797 4.79306 15.2921C4.9807 15.1044 5.23519 14.999 5.50056 14.999C5.76592 14.999 6.02042 15.1044 6.20806 15.2921L7.50056 16.5858L10.7931 13.2921C10.8859 13.1991 10.9962 13.1253 11.1176 13.075C11.239 13.0247 11.3691 12.9988 11.5006 12.9988C11.632 12.9988 11.7621 13.0247 11.8835 13.075C12.0049 13.1253 12.1152 13.1991 12.2081 13.2921ZM10.7931 5.29208L7.50056 8.58583L6.20806 7.29208C6.02042 7.10444 5.76592 6.99902 5.50056 6.99902C5.23519 6.99902 4.9807 7.10444 4.79306 7.29208C4.60542 7.47972 4.5 7.73422 4.5 7.99958C4.5 8.26494 4.60542 8.51944 4.79306 8.70708L6.79306 10.7071C6.88593 10.8001 6.99622 10.8738 7.11762 10.9241C7.23901 10.9745 7.36914 11.0004 7.50056 11.0004C7.63197 11.0004 7.7621 10.9745 7.8835 10.9241C8.00489 10.8738 8.11518 10.8001 8.20806 10.7071L12.2081 6.70708C12.3957 6.51944 12.5011 6.26494 12.5011 5.99958C12.5011 5.73422 12.3957 5.47972 12.2081 5.29208C12.0204 5.10444 11.7659 4.99902 11.5006 4.99902C11.2352 4.99902 10.9807 5.10444 10.7931 5.29208ZM10.7931 21.2921L7.50056 24.5858L6.20806 23.2921C6.11515 23.1992 6.00485 23.1255 5.88345 23.0752C5.76206 23.0249 5.63195 22.999 5.50056 22.999C5.36916 22.999 5.23905 23.0249 5.11766 23.0752C4.99627 23.1255 4.88597 23.1992 4.79306 23.2921C4.70015 23.385 4.62645 23.4953 4.57616 23.6167C4.52588 23.7381 4.5 23.8682 4.5 23.9996C4.5 24.131 4.52588 24.2611 4.57616 24.3825C4.62645 24.5039 4.70015 24.6142 4.79306 24.7071L6.79306 26.7071C6.88593 26.8001 6.99622 26.8738 7.11762 26.9241C7.23901 26.9745 7.36914 27.0004 7.50056 27.0004C7.63197 27.0004 7.7621 26.9745 7.8835 26.9241C8.00489 26.8738 8.11518 26.8001 8.20806 26.7071L12.2081 22.7071C12.3957 22.5194 12.5011 22.2649 12.5011 21.9996C12.5011 21.7342 12.3957 21.4797 12.2081 21.2921C12.0204 21.1044 11.7659 20.999 11.5006 20.999C11.2352 20.999 10.9807 21.1044 10.7931 21.2921ZM27.5006 5.99958H16.5006C16.2353 5.99958 15.981 6.10494 15.7934 6.29247C15.6059 6.48001 15.5006 6.73436 15.5006 6.99958V8.99958C15.5006 9.2648 15.6059 9.51915 15.7934 9.70669C15.981 9.89422 16.2353 9.99958 16.5006 9.99958H27.5006C27.7658 9.99958 28.0201 9.89422 28.2077 9.70669C28.3952 9.51915 28.5006 9.2648 28.5006 8.99958V6.99958C28.5006 6.73436 28.3952 6.48001 28.2077 6.29247C28.0201 6.10494 27.7658 5.99958 27.5006 5.99958ZM27.5006 21.9996H16.5006C16.2353 21.9996 15.981 22.1049 15.7934 22.2925C15.6059 22.48 15.5006 22.7344 15.5006 22.9996V24.9996C15.5006 25.2648 15.6059 25.5192 15.7934 25.7067C15.981 25.8942 16.2353 25.9996 16.5006 25.9996H27.5006C27.7658 25.9996 28.0201 25.8942 28.2077 25.7067C28.3952 25.5192 28.5006 25.2648 28.5006 24.9996V22.9996C28.5006 22.7344 28.3952 22.48 28.2077 22.2925C28.0201 22.1049 27.7658 21.9996 27.5006 21.9996ZM27.5006 13.9996H16.5006C16.2353 13.9996 15.981 14.1049 15.7934 14.2925C15.6059 14.48 15.5006 14.7344 15.5006 14.9996V16.9996C15.5006 17.2648 15.6059 17.5192 15.7934 17.7067C15.981 17.8942 16.2353 17.9996 16.5006 17.9996H27.5006C27.7658 17.9996 28.0201 17.8942 28.2077 17.7067C28.3952 17.5192 28.5006 17.2648 28.5006 16.9996V14.9996C28.5006 14.7344 28.3952 14.48 28.2077 14.2925C28.0201 14.1049 27.7658 13.9996 27.5006 13.9996Z"
        fill={active ? "#344054" : "#667185"}
      />
    </svg>
  );
}
