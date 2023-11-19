import {
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Svg,
  SvgProps,
} from "react-native-svg";

import { useTheme } from "@/context/theme";

type IconProps = {
  size?: number;
  color?: string;
  name: keyof typeof Icons;
  strokeWidth?: number;
};

export const Icon = ({
  name,
  color,
  size = 32,
  strokeWidth = 2,
}: IconProps) => {
  const Icon = Icons[name];
  const { mutedForeground } = useTheme();
  return (
    <Icon
      width={size}
      height={size}
      color={color ? color : mutedForeground}
      strokeWidth={strokeWidth}
    />
  );
};

export const Icons = {
  euolingo: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 280.3036780593864 60" {...props}>
      <Defs>
        <LinearGradient
          gradientTransform="rotate(25)"
          id="134173c4-32be-4ab3-bccf-d90425cfb083"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <Stop offset="0%" stopColor="rgb(233, 13, 218)" stopOpacity={1} />
          <Stop offset="100%" stopColor="rgb(21, 207, 241)" stopOpacity={1} />
        </LinearGradient>
      </Defs>
      <G
        id="0301329c-7bef-45c0-ab28-bf482facc61c"
        fill="url(#134173c4-32be-4ab3-bccf-d90425cfb083)"
        transform="matrix(4.33839511702164,0,0,4.33839511702164,-6.117135670713935,-12.14750683604553)"
      >
        <Path d="M4.62 6.83L4.62 6.83Q6.02 6.83 6.78 7.79L6.78 7.79L6.78 7.79Q7.53 8.75 7.53 10.33L7.53 10.33L7.53 10.33Q7.53 10.60 7.52 10.74L7.52 10.74L2.49 10.74L2.49 10.74Q2.55 12.03 3.09 12.63L3.09 12.63L3.09 12.63Q3.63 13.24 4.55 13.24L4.55 13.24L4.55 13.24Q5.19 13.24 5.68 12.95L5.68 12.95L5.68 12.95Q6.16 12.66 6.45 12.18L6.45 12.18L7.36 12.67L7.36 12.67Q6.94 13.34 6.21 13.75L6.21 13.75L6.21 13.75Q5.47 14.15 4.58 14.15L4.58 14.15L4.58 14.15Q3.72 14.15 3.00 13.78L3.00 13.78L3.00 13.78Q2.28 13.40 1.85 12.57L1.85 12.57L1.85 12.57Q1.41 11.75 1.41 10.49L1.41 10.49L1.41 10.49Q1.41 9.21 1.86 8.39L1.86 8.39L1.86 8.39Q2.31 7.57 3.04 7.20L3.04 7.20L3.04 7.20Q3.77 6.83 4.62 6.83L4.62 6.83ZM2.53 9.84L6.41 9.84L6.41 9.84Q6.36 8.88 5.91 8.31L5.91 8.31L5.91 8.31Q5.46 7.74 4.58 7.74L4.58 7.74L4.58 7.74Q3.77 7.74 3.21 8.24L3.21 8.24L3.21 8.24Q2.66 8.74 2.53 9.84L2.53 9.84ZM15.50 14L14.57 14L14.50 13.03L14.50 13.03Q14.11 13.55 13.50 13.85L13.50 13.85L13.50 13.85Q12.89 14.14 12.12 14.14L12.12 14.14L12.12 14.14Q10.96 14.14 10.37 13.43L10.37 13.43L10.37 13.43Q9.77 12.73 9.77 11.09L9.77 11.09L9.77 6.99L10.78 6.99L10.78 10.71L10.78 10.71Q10.78 11.63 10.88 12.16L10.88 12.16L10.88 12.16Q10.99 12.68 11.33 12.96L11.33 12.96L11.33 12.96Q11.66 13.23 12.33 13.23L12.33 13.23L12.33 13.23Q13.19 13.23 13.73 12.75L13.73 12.75L13.73 12.75Q14.28 12.28 14.48 11.77L14.48 11.77L14.48 6.99L15.48 6.99L15.48 12.59L15.50 14ZM21.04 14.15L21.04 14.15Q19.73 14.15 18.89 13.27L18.89 13.27L18.89 13.27Q18.05 12.38 18.05 10.49L18.05 10.49L18.05 10.49Q18.05 8.60 18.89 7.71L18.89 7.71L18.89 7.71Q19.73 6.83 21.04 6.83L21.04 6.83L21.04 6.83Q22.34 6.83 23.18 7.71L23.18 7.71L23.18 7.71Q24.02 8.60 24.02 10.49L24.02 10.49L24.02 10.49Q24.02 12.38 23.18 13.27L23.18 13.27L23.18 13.27Q22.34 14.15 21.04 14.15L21.04 14.15ZM21.04 13.24L21.04 13.24Q21.87 13.24 22.41 12.59L22.41 12.59L22.41 12.59Q22.96 11.94 22.96 10.49L22.96 10.49L22.96 10.49Q22.96 9.04 22.41 8.39L22.41 8.39L22.41 8.39Q21.87 7.74 21.04 7.74L21.04 7.74L21.04 7.74Q20.22 7.74 19.66 8.39L19.66 8.39L19.66 8.39Q19.11 9.04 19.11 10.49L19.11 10.49L19.11 10.49Q19.11 11.94 19.66 12.59L19.66 12.59L19.66 12.59Q20.20 13.24 21.04 13.24L21.04 13.24ZM30.81 13.30L30.81 13.30Q31.14 13.30 31.58 13.24L31.58 13.24L31.58 13.24Q32.02 13.17 32.21 13.13L32.21 13.13L32.21 14L32.21 14Q32.19 14 31.77 14.08L31.77 14.08L31.77 14.08Q31.36 14.15 30.60 14.15L30.60 14.15L30.60 14.15Q29.81 14.15 29.25 13.76L29.25 13.76L29.25 13.76Q28.70 13.36 28.70 12.32L28.70 12.32L28.70 3.70L26.49 3.70L26.49 2.80L29.71 2.80L29.71 12.11L29.71 12.11Q29.71 12.85 30.02 13.08L30.02 13.08L30.02 13.08Q30.32 13.30 30.81 13.30L30.81 13.30ZM37.80 5.15L37.80 5.15Q37.41 5.15 37.14 4.89L37.14 4.89L37.14 4.89Q36.86 4.62 36.86 4.23L36.86 4.23L36.86 4.23Q36.86 3.84 37.14 3.57L37.14 3.57L37.14 3.57Q37.41 3.30 37.80 3.30L37.80 3.30L37.80 3.30Q38.19 3.30 38.46 3.57L38.46 3.57L38.46 3.57Q38.72 3.84 38.72 4.23L38.72 4.23L38.72 4.23Q38.72 4.62 38.46 4.89L38.46 4.89L38.46 4.89Q38.19 5.15 37.80 5.15L37.80 5.15ZM38.33 13.10L40.42 13.10L40.42 14L37.32 14L37.32 7.90L34.85 7.90L34.85 7L38.33 7L38.33 13.10ZM46.94 6.85L46.94 6.85Q48.12 6.85 48.66 7.55L48.66 7.55L48.66 7.55Q49.21 8.25 49.21 9.80L49.21 9.80L49.21 14L48.20 14L48.20 10.14L48.20 10.14Q48.20 9.21 48.08 8.71L48.08 8.71L48.08 8.71Q47.95 8.20 47.63 7.98L47.63 7.98L47.63 7.98Q47.32 7.76 46.72 7.76L46.72 7.76L46.72 7.76Q46.19 7.76 45.71 8.02L45.71 8.02L45.71 8.02Q45.23 8.27 44.93 8.65L44.93 8.65L44.93 8.65Q44.62 9.03 44.55 9.35L44.55 9.35L44.55 14L43.54 14L43.54 9.17L43.54 7L44.37 7L44.51 8.06L44.51 8.06Q44.90 7.50 45.53 7.17L45.53 7.17L45.53 7.17Q46.16 6.85 46.94 6.85L46.94 6.85ZM56.07 13.12L56.07 13.12Q56.90 13.12 57.34 13.49L57.34 13.49L57.34 13.49Q57.78 13.86 57.78 14.49L57.78 14.49L57.78 14.49Q57.78 15.05 57.46 15.53L57.46 15.53L57.46 15.53Q57.15 16.02 56.45 16.32L56.45 16.32L56.45 16.32Q55.76 16.63 54.70 16.63L54.70 16.63L54.70 16.63Q53.16 16.63 52.35 16.19L52.35 16.19L52.35 16.19Q51.55 15.75 51.55 14.94L51.55 14.94L51.55 14.94Q51.55 14.18 52.26 13.59L52.26 13.59L52.26 13.59Q51.97 13.30 51.97 12.82L51.97 12.82L51.97 12.82Q51.97 12.10 52.72 11.47L52.72 11.47L52.72 11.47Q51.72 10.84 51.72 9.37L51.72 9.37L51.72 9.37Q51.72 7.99 52.52 7.41L52.52 7.41L52.52 7.41Q53.33 6.83 54.61 6.83L54.61 6.83L54.61 6.83Q55.96 6.83 56.70 7.42L56.70 7.42L57.62 6.51L58.27 7.13L57.26 8.13L57.26 8.13Q57.50 8.64 57.50 9.37L57.50 9.37L57.50 9.37Q57.50 10.72 56.64 11.32L56.64 11.32L56.64 11.32Q55.78 11.91 54.61 11.91L54.61 11.91L54.61 11.91Q53.93 11.91 53.38 11.76L53.38 11.76L53.38 11.76Q52.98 12.25 52.98 12.63L52.98 12.63L52.98 12.63Q52.98 13.10 53.61 13.10L53.61 13.10L54.00 13.12L56.06 13.12L56.07 13.12ZM54.61 7.73L54.61 7.73Q53.59 7.73 53.19 8.09L53.19 8.09L53.19 8.09Q52.78 8.46 52.78 9.37L52.78 9.37L52.78 9.37Q52.78 10.26 53.22 10.63L53.22 10.63L53.22 10.63Q53.66 11.00 54.61 11.00L54.61 11.00L54.61 11.00Q55.55 11.00 55.99 10.63L55.99 10.63L55.99 10.63Q56.43 10.26 56.43 9.37L56.43 9.37L56.43 9.37Q56.43 8.71 56.26 8.36L56.26 8.36L56.26 8.36Q56.08 8.01 55.70 7.87L55.70 7.87L55.70 7.87Q55.31 7.73 54.61 7.73L54.61 7.73ZM56.71 14.60L56.71 14.60Q56.71 14.34 56.49 14.18L56.49 14.18L56.49 14.18Q56.27 14.01 55.68 14.01L55.68 14.01L53.61 14.01L53.61 14.01Q53.21 14.01 52.92 13.93L52.92 13.93L52.92 13.93Q52.64 14.34 52.64 14.74L52.64 14.74L52.64 14.74Q52.64 14.90 52.68 15.02L52.68 15.02L52.68 15.02Q52.99 15.78 54.70 15.78L54.70 15.78L54.70 15.78Q55.78 15.78 56.24 15.44L56.24 15.44L56.24 15.44Q56.71 15.11 56.71 14.60L56.71 14.60ZM63.04 14.15L63.04 14.15Q61.73 14.15 60.89 13.27L60.89 13.27L60.89 13.27Q60.05 12.38 60.05 10.49L60.05 10.49L60.05 10.49Q60.05 8.60 60.89 7.71L60.89 7.71L60.89 7.71Q61.73 6.83 63.04 6.83L63.04 6.83L63.04 6.83Q64.34 6.83 65.18 7.71L65.18 7.71L65.18 7.71Q66.02 8.60 66.02 10.49L66.02 10.49L66.02 10.49Q66.02 12.38 65.18 13.27L65.18 13.27L65.18 13.27Q64.34 14.15 63.04 14.15L63.04 14.15ZM63.04 13.24L63.04 13.24Q63.87 13.24 64.41 12.59L64.41 12.59L64.41 12.59Q64.96 11.94 64.96 10.49L64.96 10.49L64.96 10.49Q64.96 9.04 64.41 8.39L64.41 8.39L64.41 8.39Q63.87 7.74 63.04 7.74L63.04 7.74L63.04 7.74Q62.22 7.74 61.66 8.39L61.66 8.39L61.66 8.39Q61.11 9.04 61.11 10.49L61.11 10.49L61.11 10.49Q61.11 11.94 61.66 12.59L61.66 12.59L61.66 12.59Q62.20 13.24 63.04 13.24L63.04 13.24Z" />
      </G>
    </Svg>
  ),
  targetCircle: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill={props.color}
      />
      <Path
        d="M9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H11.25V10C11.25 9.58579 11.5858 9.25 12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H12.75V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z"
        fill={props.color}
      />
      <Path
        d="M2.0277 12.75C2.00934 12.5024 2 12.2523 2 12C2 11.7477 2.00934 11.4976 2.0277 11.25H5C5.41421 11.25 5.75 11.5858 5.75 12C5.75 12.4142 5.41421 12.75 5 12.75H2.0277Z"
        fill={props.color}
      />
      <Path
        d="M12.75 21.9723C12.5024 21.9907 12.2523 22 12 22C11.7477 22 11.4976 21.9907 11.25 21.9723V19C11.25 18.5858 11.5858 18.25 12 18.25C12.4142 18.25 12.75 18.5858 12.75 19V21.9723Z"
        fill={props.color}
      />
      <Path
        d="M21.9723 11.25C21.9907 11.4976 22 11.7477 22 12C22 12.2523 21.9907 12.5024 21.9723 12.75H19C18.5858 12.75 18.25 12.4142 18.25 12C18.25 11.5858 18.5858 11.25 19 11.25H21.9723Z"
        fill={props.color}
      />
      <Path
        d="M12.75 2.0277V5C12.75 5.41421 12.4142 5.75 12 5.75C11.5858 5.75 11.25 5.41421 11.25 5V2.0277C11.4976 2.00934 11.7477 2 12 2C12.2523 2 12.5024 2.00934 12.75 2.0277Z"
        fill={props.color}
      />
    </Svg>
  ),
  clockCircle: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
        fill={props.color}
      />
    </Svg>
  ),
  closeCircle: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill={props.color}
      />
      <Path
        d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
        fill={props.color}
      />
    </Svg>
  ),
  checkCircle: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill={props.color}
      />
      <Path
        d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
        fill={props.color}
      />
    </Svg>
  ),
  setting: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224Z"
        fill={props.color}
      />
      <Path
        d="M15.5227 12C15.5227 13.6569 14.1694 15 12.4999 15C10.8304 15 9.47705 13.6569 9.47705 12C9.47705 10.3431 10.8304 9 12.4999 9C14.1694 9 15.5227 10.3431 15.5227 12Z"
        fill={props.color}
      />
    </Svg>
  ),
  skip: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 32 32" {...props}>
      <Path
        fill={props.color}
        d="M28.448,17.261L15.552,27.739C14.698,28.432,14,28.1,14,27v-6.938l-9.448,7.676
	C3.698,28.432,3,28.1,3,27V5c0-1.1,0.698-1.432,1.552-0.739L14,11.937V5c0-1.1,0.698-1.432,1.552-0.739l12.896,10.478
	C29.302,15.432,29.302,16.568,28.448,17.261z"
      />
    </Svg>
  ),
  check: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  lock: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fill={props.color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5.014v-.93c0-1.078.417-2.114 1.165-2.881A3.96 3.96 0 018 0a3.96 3.96 0 012.835 1.203A4.127 4.127 0 0112 4.083v.93a2.25 2.25 0 012 2.237v5.5A2.25 2.25 0 0111.75 15h-7.5A2.25 2.25 0 012 12.75v-5.5a2.25 2.25 0 012-2.236zM6.239 2.25A2.46 2.46 0 018 1.5c.657 0 1.29.267 1.761.75.471.483.739 1.142.739 1.833V5h-5v-.917c0-.69.268-1.35.739-1.833zM8 9.25a.75.75 0 00-.75.75v1a.75.75 0 001.5 0v-1A.75.75 0 008 9.25z"
      />
    </Svg>
  ),
  star: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
        fill={props.color}
      />
    </Svg>
  ),
  notebook: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G strokeWidth="0" />
      <G strokeLinecap="round" strokeLinejoin="round" />
      <G>
        <Path
          opacity="0.5"
          d="M3 8C3 5.17157 3 3.75736 3.87868 2.87868C4.75736 2 6.17157 2 9 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V8Z"
          fill={props.color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75 2.01221V22.0111H7.25V2.01221H8.75Z"
          fill={props.color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H4C4.41421 7.25 4.75 7.58579 4.75 8C4.75 8.41421 4.41421 8.75 4 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H4C4.41421 15.25 4.75 15.5858 4.75 16C4.75 16.4142 4.41421 16.75 4 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16Z"
          fill={props.color}
        />
        <Path
          d="M10.75 6.5C10.75 6.08579 11.0858 5.75 11.5 5.75H16.5C16.9142 5.75 17.25 6.08579 17.25 6.5C17.25 6.91421 16.9142 7.25 16.5 7.25H11.5C11.0858 7.25 10.75 6.91421 10.75 6.5Z"
          fill={props.color}
        />
        <Path
          d="M10.75 10C10.75 9.58579 11.0858 9.25 11.5 9.25H16.5C16.9142 9.25 17.25 9.58579 17.25 10C17.25 10.4142 16.9142 10.75 16.5 10.75H11.5C11.0858 10.75 10.75 10.4142 10.75 10Z"
          fill={props.color}
        />
      </G>
    </Svg>
  ),
  chevronDown: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G strokeWidth="0" />
      <G strokeLinecap="round" strokeLinejoin="round" />
      <G>
        <path
          d="M19 9L12 15L5 9"
          // @ts-ignore
          stroke={props.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  ),
  chevronUp: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G strokeWidth="0"></G>
      <G strokeLinecap="round" strokeLinejoin="round"></G>
      <G>
        <Path
          d="M19 15L12 9L5 15"
          stroke={props.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  ),
  home: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5315 11.5857L20.75 10.9605V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4143 22.4142 22.75 22 22.75H2.00003C1.58581 22.75 1.25003 22.4143 1.25003 22C1.25003 21.5858 1.58581 21.25 2.00003 21.25H3.25003V10.9605L2.46855 11.5857C2.1451 11.8445 1.67313 11.792 1.41438 11.4686C1.15562 11.1451 1.20806 10.6731 1.53151 10.4144L9.65742 3.91366C11.027 2.818 12.9731 2.818 14.3426 3.91366L22.4685 10.4144C22.792 10.6731 22.8444 11.1451 22.5857 11.4686C22.3269 11.792 21.855 11.8445 21.5315 11.5857ZM12 6.75004C10.4812 6.75004 9.25003 7.98126 9.25003 9.50004C9.25003 11.0188 10.4812 12.25 12 12.25C13.5188 12.25 14.75 11.0188 14.75 9.50004C14.75 7.98126 13.5188 6.75004 12 6.75004ZM13.7459 13.3116C13.2871 13.25 12.7143 13.25 12.0494 13.25H11.9507C11.2858 13.25 10.7129 13.25 10.2542 13.3116C9.76255 13.3777 9.29128 13.5268 8.90904 13.9091C8.52679 14.2913 8.37773 14.7626 8.31163 15.2542C8.24996 15.7129 8.24999 16.2858 8.25003 16.9507L8.25003 21.25H9.75003H14.25H15.75L15.75 16.9507L15.75 16.8271C15.7498 16.2146 15.7462 15.6843 15.6884 15.2542C15.6223 14.7626 15.4733 14.2913 15.091 13.9091C14.7088 13.5268 14.2375 13.3777 13.7459 13.3116Z"
        fill={props.color}
      />
      <G opacity="0.5">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
          fill={props.color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z"
          fill={props.color}
        />
      </G>
      <Path
        opacity="0.5"
        d="M12.0494 13.25C12.7142 13.25 13.2871 13.2499 13.7458 13.3116C14.2375 13.3777 14.7087 13.5268 15.091 13.909C15.4732 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827L15.75 21.25H8.25L8.25 16.9506C8.24997 16.2858 8.24993 15.7129 8.31161 15.2542C8.37771 14.7625 8.52677 14.2913 8.90901 13.909C9.29126 13.5268 9.76252 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9506 13.25H12.0494Z"
        fill={props.color}
      />
      <Path
        opacity="0.5"
        d="M16 3H18.5C18.7761 3 19 3.22386 19 3.5L19 7.63955L15.5 4.83955V3.5C15.5 3.22386 15.7239 3 16 3Z"
        fill={props.color}
      />
    </Svg>
  ),
  languageSquare: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill={props.color}
      />
      <Path
        d="M17.0002 15.97C15.6902 15.97 14.4402 15.37 13.4402 14.26C14.4302 12.99 15.0702 11.42 15.2102 9.70004H16.9902C17.4002 9.70004 17.7402 9.36004 17.7402 8.95004C17.7402 8.54004 17.4002 8.20004 16.9902 8.20004H14.5602C14.5402 8.20004 14.5202 8.19003 14.5002 8.19003C14.4802 8.19003 14.4602 8.20004 14.4402 8.20004H12.7502V7.27002C12.7502 6.86002 12.4102 6.52002 12.0002 6.52002C11.5902 6.52002 11.2502 6.86002 11.2502 7.27002V8.20004H7.01025C6.60025 8.20004 6.26025 8.54004 6.26025 8.95004C6.26025 9.36004 6.60025 9.70004 7.01025 9.70004H12.0002H13.7003C13.3303 13.22 10.4702 15.97 6.99023 15.97C6.58023 15.97 6.24023 16.31 6.24023 16.72C6.24023 17.13 6.58023 17.47 6.99023 17.47C9.06023 17.47 10.9502 16.67 12.4002 15.36C13.6702 16.72 15.2802 17.47 16.9902 17.47C17.4002 17.47 17.7402 17.13 17.7402 16.72C17.7402 16.31 17.4102 15.97 17.0002 15.97Z"
        fill={props.color}
      />
    </Svg>
  ),
  shieldStar: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241Z"
        fill={props.color}
      />
      <Path
        d="M10.8613 8.36335L10.7302 8.59849C10.5862 8.85677 10.5142 8.98591 10.402 9.07112C10.2897 9.15633 10.1499 9.18796 9.87035 9.25122L9.61581 9.30881C8.63194 9.53142 8.14001 9.64273 8.02297 10.0191C7.90593 10.3955 8.2413 10.7876 8.91204 11.572L9.08557 11.7749C9.27617 11.9978 9.37147 12.1092 9.41435 12.2471C9.45722 12.385 9.44281 12.5336 9.41399 12.831L9.38776 13.1018C9.28635 14.1482 9.23565 14.6715 9.54206 14.9041C9.84847 15.1367 10.3091 14.9246 11.2303 14.5005L11.2303 14.5005L11.4686 14.3907L11.4686 14.3907C11.7304 14.2702 11.8613 14.2099 12 14.2099C12.1387 14.2099 12.2696 14.2702 12.5314 14.3907L12.7697 14.5005L12.7697 14.5005C13.6909 14.9246 14.1515 15.1367 14.4579 14.9041C14.7644 14.6715 14.7136 14.1482 14.6122 13.1018L14.586 12.831L14.586 12.831C14.5572 12.5336 14.5428 12.3849 14.5857 12.2471C14.6285 12.1092 14.7238 11.9978 14.9144 11.7749L15.088 11.572L15.088 11.572C15.7587 10.7876 16.0941 10.3955 15.977 10.0191C15.86 9.64273 15.3681 9.53142 14.3842 9.30881L14.1296 9.25122C13.8501 9.18796 13.7103 9.15633 13.598 9.07112C13.4858 8.98592 13.4138 8.85678 13.2698 8.59851L13.2698 8.5985L13.1387 8.36335L13.1387 8.36334C12.6321 7.45445 12.3787 7 12 7C11.6213 7 11.3679 7.45445 10.8613 8.36334L10.8613 8.36335Z"
        fill={props.color}
      />
    </Svg>
  ),
  box: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z"
        fill={props.color}
      />
      <Path
        opacity="0.7"
        d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z"
        fill={props.color}
      />
      <Path
        opacity="0.5"
        d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z"
        fill={props.color}
      />
    </Svg>
  ),
  shop: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M14.5 21.9913V18.5C14.5 17.5654 14.5 17.0981 14.299 16.75C14.1674 16.522 13.978 16.3326 13.75 16.201C13.4019 16 12.9346 16 12 16C11.0654 16 10.5981 16 10.25 16.201C10.022 16.3326 9.83261 16.522 9.70096 16.75C9.5 17.0981 9.5 17.5654 9.5 18.5V21.9913H14.5Z"
        fill={props.color}
      />
      <Path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.73204 12C4.84126 12 4.05323 11.6239 3.5 11.0329V14C3.5 17.7712 3.5 19.6568 4.67157 20.8284C5.61466 21.7715 7.02043 21.9554 9.5 21.9913H14.5C16.9796 21.9554 18.3853 21.7715 19.3284 20.8284C20.5 19.6568 20.5 17.7712 20.5 14V11.034C19.9468 11.6244 19.1592 12 18.269 12C16.6973 12 15.3814 10.8091 15.225 9.24523L15.152 8.51733C15.3385 10.382 13.8742 12 12.0003 12C10.139 12 8.6819 10.4038 8.84499 8.55511L8.77598 9.24523C8.6196 10.8091 7.30367 12 5.73204 12ZM14.5 18.5V21.9913H9.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5Z"
        fill={props.color}
      />
      <Path
        d="M9.4998 2H14.4998L15.1515 8.51737C15.338 10.382 13.8737 12 11.9998 12C10.1259 12 8.6616 10.382 8.84806 8.51737L9.4998 2Z"
        fill={props.color}
      />
      <Path
        opacity="0.7"
        d="M3.33024 5.35133C3.50832 4.46093 3.59736 4.01573 3.7784 3.65484C4.15987 2.89439 4.84628 2.33168 5.66677 2.10675C6.05616 2 6.51017 2 7.4182 2H9.50051L8.77598 9.24527C8.6196 10.8091 7.30367 12 5.73204 12C3.80159 12 2.35373 10.2339 2.73232 8.34093L3.33024 5.35133Z"
        fill={props.color}
      />
      <Path
        opacity="0.7"
        d="M20.6703 5.35133C20.4922 4.46093 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.5L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133Z"
        fill={props.color}
      />
    </Svg>
  ),
  profile: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill={props.color}
      />
      <Path
        d="M17.0809 14.1499C14.2909 12.2899 9.74094 12.2899 6.93094 14.1499C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1299 18.3409 14.9899 17.0809 14.1499Z"
        fill={props.color}
      />
    </Svg>
  ),
  menuDots: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill={props.color}
      />
      <Path
        d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
        fill={props.color}
      />
      <Path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill={props.color}
      />
      <Path
        d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
        fill={props.color}
      />
    </Svg>
  ),
  heart: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M2.34594 11.2501C2.12458 10.5866 2 9.92019 2 9.26044C2 3.3495 7.50016 0.662637 12 5.49877C16.4998 0.662637 22 3.34931 22 9.2604C22 9.92017 21.8754 10.5866 21.6541 11.2501H18.6361L18.5241 11.25C17.9784 11.2491 17.4937 11.2483 17.0527 11.4447C16.6116 11.6411 16.2879 12.002 15.9233 12.4084L15.8485 12.4918L14.8192 13.6354C14.7164 13.7496 14.5379 13.7463 14.4401 13.6277L10.8889 9.32318C10.7493 9.15391 10.6 8.97281 10.454 8.8384C10.2839 8.68188 10.0325 8.50581 9.68096 8.4847C9.32945 8.46359 9.05875 8.60829 8.87115 8.74333C8.71006 8.8593 8.54016 9.02123 8.38136 9.17258L6.85172 10.6294C6.37995 11.0787 6.28151 11.1553 6.17854 11.1964C6.07557 11.2376 5.9515 11.2501 5.3 11.2501H2.34594Z"
        fill={props.color}
      />
      <Path
        d="M21.6538 11.2499H18.6359L18.5239 11.2497C17.9781 11.2489 17.4935 11.2481 17.0524 11.4445C16.6114 11.6409 16.2876 12.0018 15.9231 12.4082L15.8482 12.4915L14.819 13.6352C14.7162 13.7494 14.5377 13.7461 14.4399 13.6275L10.8886 9.32297C10.7491 9.1537 10.5998 8.9726 10.4537 8.83819C10.2837 8.68166 10.0322 8.5056 9.68072 8.48449C9.32922 8.46337 9.05852 8.60808 8.87092 8.74312C8.70983 8.85908 8.53993 9.02101 8.38113 9.17236L6.85149 10.6292C6.37972 11.0785 6.28128 11.155 6.17831 11.1962C6.07534 11.2374 5.95126 11.2499 5.29977 11.2499H2.3457C3.38166 14.3548 6.5372 17.3936 8.9615 19.3705C10.2935 20.4567 10.9595 20.9998 11.9998 20.9998C13.0401 20.9998 13.7061 20.4567 15.038 19.3705C17.4623 17.3936 20.6179 14.3548 21.6538 11.2499Z"
        fill={props.color}
      />
    </Svg>
  ),
  fire: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M12 21C16.4183 21 20 17.6439 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C6.9046 4.90436 4 8.51143 4 13.504C4 17.6439 7.58172 21 12 21Z"
        fill={props.color}
      />
      <Path
        d="M4.4766 16.0587C6.08562 13.6138 8.85435 12 12 12C15.1457 12 17.9144 13.6138 19.5234 16.0587C19.8318 15.2614 20 14.4011 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C6.9046 4.90436 4 8.51143 4 13.504C4 14.4011 4.16818 15.2614 4.4766 16.0587Z"
        fill={props.color}
      />
    </Svg>
  ),
  donut: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity="0.5"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 12.3539 2.01839 12.7036 2.05426 13.048C2.40307 13.3523 4.367 15 6 15C7.21199 15 8.60628 14.0924 9.38725 13.5L9.39619 13.4911C9.14413 13.0518 9 12.5427 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 12.8851 14.6167 13.6807 14.007 14.2298C14.4774 14.6425 15.0911 15 15.8053 15C17.4948 15 17.4948 13 19.1842 13C20.2618 13 21.1102 13.8136 21.5835 14.4029L21.6758 14.5353C21.8874 13.7256 22 12.876 22 12C22 6.47715 17.5228 2 12 2Z"
        fill={props.color}
      />
      <Path
        d="M9.38768 13.5C8.60671 14.0924 7.21242 15 6.00043 15C4.36743 15 2.4035 13.3523 2.05469 13.048C2.57857 18.0783 6.83152 22 12.0004 22C16.6473 22 20.5539 18.8304 21.6762 14.5353L21.5839 14.4029C21.1107 13.8136 20.2622 13 19.1847 13C17.4952 13 17.4952 15 15.8058 15C15.0915 15 14.4779 14.6425 14.0075 14.2298C13.4759 14.7086 12.7722 15 12.0004 15C10.8863 15 9.91405 14.3927 9.39662 13.4911L9.38768 13.5Z"
        fill={props.color}
      />
      <Path
        d="M19.5281 5.41717C19.5081 5.43348 19.4886 5.45098 19.4699 5.46967L18.4699 6.46967C18.177 6.76256 18.177 7.23744 18.4699 7.53033C18.7628 7.82322 19.2377 7.82322 19.5306 7.53033L20.435 6.62594C20.163 6.19995 19.8596 5.79594 19.5281 5.41717Z"
        fill={props.color}
      />
      <Path
        d="M5.41741 4.47212C5.43372 4.4922 5.45122 4.51164 5.46992 4.53033L6.46992 5.53033C6.76281 5.82322 7.23768 5.82322 7.53058 5.53033C7.82347 5.23744 7.82347 4.76256 7.53058 4.46967L6.62619 3.56528C6.2002 3.83726 5.79618 4.14062 5.41741 4.47212Z"
        fill={props.color}
      />
      <Path
        d="M10.4699 4.53033C10.177 4.23744 10.177 3.76256 10.4699 3.46967C10.7628 3.17678 11.2377 3.17678 11.5306 3.46967L12.5306 4.46967C12.8235 4.76256 12.8235 5.23744 12.5306 5.53033C12.2377 5.82322 11.7628 5.82322 11.4699 5.53033L10.4699 4.53033Z"
        fill={props.color}
      />
      <Path
        d="M16.6002 5.45C16.8488 5.11863 16.7816 4.64853 16.4502 4.4C16.1189 4.15147 15.6488 4.21863 15.4002 4.55L13.9002 6.55C13.6517 6.88137 13.7189 7.35147 14.0502 7.6C14.3816 7.84853 14.8517 7.78137 15.1002 7.45L16.6002 5.45Z"
        fill={props.color}
      />
      <Path
        d="M8.40978 7.56014C8.51698 7.96024 8.92824 8.19768 9.32834 8.09047L10.6944 7.72444C11.0945 7.61724 11.3319 7.20599 11.2247 6.80589C11.1175 6.40579 10.7062 6.16835 10.3061 6.27556L8.94011 6.64158C8.54001 6.74879 8.30257 7.16004 8.40978 7.56014Z"
        fill={props.color}
      />
      <Path
        d="M17.4655 10.354C17.485 10.7678 17.1653 11.119 16.7516 11.1384C16.3378 11.1579 15.9866 10.8382 15.9672 10.4245L15.9008 9.01181C15.8814 8.59806 16.201 8.24688 16.6148 8.22743C17.0285 8.20799 17.3797 8.52764 17.3992 8.94139L17.4655 10.354Z"
        fill={props.color}
      />
      <Path
        d="M18.437 12.0586C18.7108 12.3694 19.1847 12.3995 19.4956 12.1257L21.1736 10.6479C21.4845 10.3741 21.5146 9.90018 21.2408 9.58933C20.967 9.27848 20.4931 9.24841 20.1823 9.52217L18.5042 11C18.1934 11.2738 18.1633 11.7477 18.437 12.0586Z"
        fill={props.color}
      />
      <Path
        d="M5.5247 8.16677C5.35329 7.78969 5.52002 7.34505 5.8971 7.17364C6.27419 7.00223 6.71883 7.16896 6.89024 7.54605L7.47546 8.83349C7.64687 9.21058 7.48014 9.65522 7.10306 9.82662C6.72597 9.99803 6.28133 9.8313 6.10992 9.45422L5.5247 8.16677Z"
        fill={props.color}
      />
      <Path
        d="M6.9432 10.895C7.27745 11.1397 7.3501 11.6089 7.10547 11.9432L6.27024 13.0844C6.0256 13.4187 5.55632 13.4913 5.22206 13.2467C4.88781 13.0021 4.81516 12.5328 5.05979 12.1985L5.89502 11.0573C6.13966 10.723 6.60894 10.6504 6.9432 10.895Z"
        fill={props.color}
      />
      <Path
        d="M2.85567 8.97928C2.83263 8.56571 3.14922 8.21177 3.5628 8.18873C3.97637 8.16569 4.33031 8.48228 4.35335 8.89585L4.43201 10.3079C4.45505 10.7214 4.13846 11.0754 3.72489 11.0984C3.31132 11.1215 2.95738 10.8049 2.93434 10.3913L2.85567 8.97928Z"
        fill={props.color}
      />
    </Svg>
  ),
  bolt: ({ ...props }: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.73167 5.77133L5.66953 9.91436C4.3848 11.6526 3.74244 12.5217 4.09639 13.205C4.10225 13.2164 4.10829 13.2276 4.1145 13.2387C4.48945 13.9117 5.59888 13.9117 7.81775 13.9117C9.05079 13.9117 9.6673 13.9117 10.054 14.2754L10.074 14.2946L13.946 9.72466L13.926 9.70541C13.5474 9.33386 13.5474 8.74151 13.5474 7.55682V7.24712C13.5474 3.96249 13.5474 2.32018 12.6241 2.03721C11.7007 1.75425 10.711 3.09327 8.73167 5.77133Z"
        fill={props.color}
      />
      <Path
        opacity="0.5"
        d="M10.4527 16.4432L10.4527 16.7528C10.4527 20.0374 10.4527 21.6798 11.376 21.9627C12.2994 22.2457 13.2891 20.9067 15.2685 18.2286L18.3306 14.0856C19.6154 12.3474 20.2577 11.4783 19.9038 10.7949C19.8979 10.7836 19.8919 10.7724 19.8857 10.7613C19.5107 10.0883 18.4013 10.0883 16.1824 10.0883C14.9494 10.0883 14.3329 10.0883 13.9462 9.72461L10.0742 14.2946C10.4528 14.6661 10.4527 15.2585 10.4527 16.4432Z"
        fill={props.color}
      />
    </Svg>
  ),
};
