import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface CircleFlagProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  countryCode: string;
}

/**
 *
 * Demos:
 * - https://tnovau.github.io/react-circle-flags/gallery
 *
 * Docs:
 * - https://tnovau.github.io/react-circle-flags/
 */
declare function CircleFlag(props: CircleFlagProps): JSX.Element;

export { CircleFlag }