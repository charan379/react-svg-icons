import React from "react";
import { SvgProps } from "../..";

export interface EmailSvgProps extends SvgProps {
  envelopTopColor?: string;
  envelopTopBorderColor?: string;
  envelopLeftBorderColor?: string;
  envelopRightBorderColor?: string;
  envelopInnerTopLeftColor?: string;
  envelopInnerLeftColor?: string;
  envelopInnerRightColor?: string;
  envelopInnerBottomLeftColor?: string;
}
export const EmailSvg: React.FC<EmailSvgProps> = (props) => {
  const {
    size = 55,
    envelopTopColor = "#f5f5f5",
    envelopTopBorderColor = "#e84f4b",
    envelopLeftBorderColor = "#ca3737",
    envelopRightBorderColor = "#ca3737",
    envelopInnerTopLeftColor = "#d9d9d9",
    envelopInnerLeftColor = "#e0e0e0",
    envelopInnerRightColor = "#e0e0e0",
    envelopInnerBottomLeftColor = "#eeeeee",
  } = props;
  return (
    <>
      {/* Email Svg Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={size}
        height={size}
        viewBox="0,0,256,256"
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(5.33333,5.33333)">
            {/* envelopInnerLeftColor fill="#e0e0e0" */}
            <path
              d="M5.5,40.5h37c1.933,0 3.5,-1.567 3.5,-3.5v-26c0,-1.933 -1.567,-3.5 -3.5,-3.5h-37c-1.933,0 -3.5,1.567 -3.5,3.5v26c0,1.933 1.567,3.5 3.5,3.5z"
              fill={envelopInnerLeftColor}
            ></path>
            {/* envelopInnerTopLeftColor fill="#d9d9d9" */}
            <path
              d="M26,40.5h16.5c1.933,0 3.5,-1.567 3.5,-3.5v-26c0,-1.933 -1.567,-3.5 -3.5,-3.5h-37c-1.933,0 -3.5,1.567 -3.5,3.5z"
              fill={envelopInnerTopLeftColor}
            ></path>
            {/* envelopInnerBottomLeftColor fill="#eeeeee" */}
            <path
              d="M6.745,40.5h35.755c1.933,0 3.5,-1.567 3.5,-3.5v-25.5z"
              fill={envelopInnerBottomLeftColor}
            ></path>
            {/* envelopInnerRightColor fill="#e0e0e0" */}
            <path
              d="M25.745,40.5h16.755c1.933,0 3.5,-1.567 3.5,-3.5v-25.5l-27.229,20.116z"
              fill={envelopInnerRightColor}
            ></path>
            {/*  envelopBorderSidesColor fill="#ca3737" */}
            {/* <path
              d="M42.5,9.5h-37c-1.933,0 -3.5,-0.433 -3.5,1.5v26c0,1.933 1.567,3.5 3.5,3.5h1.5v-28.5h34v28.5h1.5c1.933,0 3.5,-1.567 3.5,-3.5v-26c0,-1.933 -1.567,-1.5 -3.5,-1.5z"
              fill={envelopSidesBorderColor}
            ></path> */}
            {/* Separating Left and Right Borders */}
            {/*  envelopLeftBorderColor fill="#ca3737" */}
            <path
              d="M22,10.5h-18.25c-0.966,4 -.5,0.216 -1.75,1v27.15.1c0,0.966 0.984,1.75 1.75,1.75h2.3.5.25v-28.5c-9.25v-1.5z"
              fill={envelopLeftBorderColor}
            />
            {/*  envelopRightBorderColor fill="#ca3737" */}
            <path
              d="M26.05,9.45h18.24c-5.966,0 1.75,0.216 1.75,0.80v28.51c0,0.966 -0.984,1.75 -1.75,1.75h-3.5.25v-28.5c9.25v-1.5z"
              fill={envelopRightBorderColor}
            />
            {/* envelopTopColor fill="#f5f5f5" */}
            <path
              d="M42.5,7.5h-18.5h-18.5c-1.933,0 -3.5,1.536 -3.5,3.5c0,1.206 1.518,2.258 1.518,2.258l20.482,14.498l20.482,-14.497c0,0 1.518,-1.053 1.518,-2.258c0,-1.965 -1.567,-3.501 -3.5,-3.501z"
              fill={envelopTopColor}
            ></path>
            {/* envelopBorderTopColor fill="#e84f4b" */}
            <path
              d="M43.246,7.582l-19.246,13.418l-19.246,-13.418c-1.574,0.337 -2.754,1.715 -2.754,3.418c0,1.206 1.518,2.258 1.518,2.258l20.482,14.498l20.482,-14.497c0,0 1.518,-1.053 1.518,-2.258c0,-1.704 -1.18,-3.082 -2.754,-3.419z"
              fill={envelopTopBorderColor}
            ></path>
          </g>
        </g>
      </svg>
    </>
  );
};
