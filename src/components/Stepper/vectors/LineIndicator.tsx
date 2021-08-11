import * as React from "react";

interface iprops extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

function LineIndicator(props: iprops) {
  return (
    <svg
      width={249}
      height={24}
      viewBox="0 0 249 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24V0s10.12 8 14.054 8h214.262C237.824 8 249 0 249 0v24s-11.176-8-20.684-8H14.32C10.217 16 0 24 0 24z"
        fill={"#DDD" || props.color}
      />
    </svg>
  );
}

export default LineIndicator;
