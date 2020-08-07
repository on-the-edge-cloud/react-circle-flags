import React from 'react'
import countries from './countries'

const CDN_URL = 'https://hatscripts.github.io/circle-flags/flags/'
const FILE_SUFFIX = 'svg'

const UNKNOWN_FLAG = 'xx'
const DEFAULT_HEIGHT = 100

/**
 * @param {string} countryCode
 * @param {Omit<import('../react-circle-flags').CircleFlagProps, "countryCode">} otherProps
 */
const getSvgProps = (countryCode, otherProps) => ({
  ...otherProps,
  title: otherProps.title || countryCode,
  height: otherProps.height || DEFAULT_HEIGHT,
  src: `${CDN_URL}${countryCode}.${FILE_SUFFIX}`
})

/**
 * @param {string} countryCode
 */
const parseCountryCode = (countryCode) =>
  countries[countryCode] ? countryCode : UNKNOWN_FLAG

/**
 * @param {import('../react-circle-flags').CircleFlagProps} param0
 */
export const CircleFlag = ({ countryCode, ...otherProps }) => (
  <img
    data-testid='circle-country-flag'
    {...getSvgProps(parseCountryCode(countryCode).toLowerCase(), otherProps)}
  />
)

export { countries }
