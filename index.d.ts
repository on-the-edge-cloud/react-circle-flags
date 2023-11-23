import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

interface CircleFlagProps extends DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> {
  /**
   * Country code of flag.
   */
  countryCode: string
  /**
   * Custom CDN URL to use.
   */
  cdnUrl?: string
}

interface CircleFlagLanguageProps extends DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> {
  /**
   * Language code of flag.
   */
  languageCode: string
  /**
   * Custom CDN URL to use.
   */
  cdnUrl?: string
}

/**
 *
 * Demos:
 * - https://tnovau.github.io/react-circle-flags/gallery
 *
 * Docs:
 * - https://tnovau.github.io/react-circle-flags/
 */
declare function CircleFlag(props: CircleFlagProps): JSX.Element
declare function CircleFlagLanguage(props: CircleFlagLanguageProps): JSX.Element

declare var countries: Record<string, boolean>
declare var languages: Record<string, boolean>

export { CircleFlag, CircleFlagLanguage, CircleFlagProps, countries, languages }
