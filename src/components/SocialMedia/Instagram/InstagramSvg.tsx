import React from "react";
import { FixedLengthArray, SvgProps } from "../..";


export interface InstagramSvgProps extends SvgProps {
  colorsType?: "original" | "custom";
  thickLinesColor?: string;
  thinLinesColor?: string;
  northWestShade?: string;
  radientsUrlid?: string | number;
}

export const InstagramSvg: React.FC<InstagramSvgProps> = (props) => {
  const {
    size = 55,
    colorsType = "original",
    thickLinesColor = "#00000",
    thinLinesColor = "#fff",
    northWestShade = "",
    radientsUrlid = 234,
  } = props;

  const originalRadicalsAndColors: FixedLengthArray<string, 9> = [
    "#fd5", // thickLinesRad
    "#ff543f", // thickLinesRad
    "#fc5245", // thickLinesRad
    "#e64771", // thickLinesRad
    "#d53e91", // thickLinesRad
    "#cc39a4", // thickLinesRad
    "#c837ab", // thickLinesRad
    "#4168c9", // northWestShade
    "#fff", // thinLinesColor
  ];

  let colors: FixedLengthArray<string, 9>;

  switch (colorsType) {
    case "original": {
      colors = originalRadicalsAndColors;
      break;
    }

    case "custom": {
      colors = Array(9).fill(thickLinesColor) as FixedLengthArray<string, 9>;
      colors[7] = northWestShade ?? thickLinesColor;
      colors[8] = thinLinesColor;
      break;
    }

    default: {
      colors = originalRadicalsAndColors;
      break;
    }
  }

  return (
    <>
      {/* instagram svg  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={size}
        height={size}
        viewBox="0 0 48 48"
      >
        <radialGradient
          id={`yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1_${radientsUrlid}`}
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={colors[0]}></stop>
          <stop offset=".328" stopColor={colors[1]}></stop>
          <stop offset=".348" stopColor={colors[2]}></stop>
          <stop offset=".504" stopColor={colors[3]}></stop>
          <stop offset=".643" stopColor={colors[4]}></stop>
          <stop offset=".761" stopColor={colors[5]}></stop>
          <stop offset=".841" stopColor={colors[6]}></stop>
        </radialGradient>
        <path
          fill={`url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1_${radientsUrlid})`}
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id={`yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2_${radientsUrlid}`}
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={colors[7]}></stop>
          <stop offset=".999" stopColor={colors[7]} stopOpacity="0"></stop>
        </radialGradient>
        <path
          fill={`url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2_${radientsUrlid})`}
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill={colors[8]}
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle cx="31.5" cy="16.5" r="1.5" fill={colors[8]}></circle>
        <path
          fill={colors[8]}
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        ></path>
      </svg>
    </>
  );
};
