import * as React from "react";

function GradientLineIndicator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={251}
      height={23}
      viewBox="0 0 251 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.596 22.271V.453S10.74 7.726 14.684 7.726H229.47c9.531 0 20.734-7.273 20.734-7.273v21.819S239 14.998 229.469 14.998H14.95C10.838 14.999.596 22.27.596 22.27z"
        fill="#2290FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.596 22.271V.453S10.74 7.726 14.684 7.726H229.47c9.531 0 20.734-7.273 20.734-7.273v21.819S239 14.998 229.469 14.998H14.95C10.838 14.999.596 22.27.596 22.27z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={-1}
          y1={23}
          x2={251}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C4971" stopOpacity={0.833} />
          <stop offset={1} stopColor="#213864" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientLineIndicator;
