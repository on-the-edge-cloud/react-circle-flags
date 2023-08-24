import React from 'react'
import countries from './countries'
import languages from './languages'

const CDN_URL = 'https://hatscripts.github.io/circle-flags/flags/'
const FILE_SUFFIX = 'svg'

const UNKNOWN_FLAG = 'xx'
const DEFAULT_HEIGHT = 100

/**
 * @param {string} code
 * @param {string} cdnUrl
 * @param {Omit<import('../index').CircleFlagProps, "countryCode" | "cdnUrl">} otherProps
 * @param {string} cdnSuffix
 */
const getSvgProps = (code, cdnUrl, otherProps, cdnSuffix = '') => ({
  ...otherProps,
  title: otherProps.title || code,
  height: otherProps.height || DEFAULT_HEIGHT,
  src: `${cdnUrl || CDN_URL}${cdnSuffix}${code}.${FILE_SUFFIX}`
})

/**
 * @param {string} countryCode
 */
const parseCountryCode = (countryCode) =>
  countries[countryCode] ? countryCode : UNKNOWN_FLAG

const parseLanguageCode = (languageCode) =>
  languages[languageCode] ? languageCode : UNKNOWN_FLAG

/**
 * @param {import('../index').CircleFlagProps} param0
 */
export const CircleFlag = ({ countryCode, cdnUrl, ...otherProps }) => (
  <img
    data-testid='circle-country-flag'
    {...getSvgProps(
      parseCountryCode(countryCode).toLowerCase(),
      cdnUrl,
      otherProps
    )}
  />
)

/**
 * @param {import('../index').CircleFlagLanguage} param0
 */
export const CircleFlagLanguage = ({ languageCode, cdnUrl, ...otherProps }) => (
  <img
    data-testid='circle-language-flag'
    {...getSvgProps(
      parseLanguageCode(languageCode).toLowerCase(),
      cdnUrl,
      otherProps,
      'language/'
    )}
  />
)

export { countries, languages }
