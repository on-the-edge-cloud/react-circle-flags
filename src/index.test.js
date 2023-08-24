import React from 'react'
import { render } from '@testing-library/react'
import { CircleFlag, CircleFlagLanguage } from '.'

describe('CircleFlag', () => {
  it('should render correctly with defaults', () => {
    const { getByTestId } = render(<CircleFlag />)
    const countryFlag = getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://hatscripts.github.io/circle-flags/flags/xx.svg'
    )
    expect(countryFlag.title).toBe('xx')
    expect(countryFlag.getAttribute('height')).toBe('100')
  })

  it('should render correctly with props', () => {
    const { getByTestId } = render(
      <CircleFlag countryCode='es' height='35' title='Spain' />
    )
    const countryFlag = getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://hatscripts.github.io/circle-flags/flags/es.svg'
    )
    expect(countryFlag.title).toBe('Spain')
    expect(countryFlag.getAttribute('height')).toBe('35')
  })

  it('should render correctly with cdnUrl parameter', () => {
    const { getByTestId } = render(
      <CircleFlag
        countryCode='es'
        height='35'
        title='Spain'
        cdnUrl='https://magic-cdn.com/flags/'
      />
    )
    const countryFlag = getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://magic-cdn.com/flags/es.svg'
    )
  })

  it('should render UNKNOWN_FLAG if the countryCode is not in countries', () => {
    const { getByTestId } = render(
      <CircleFlag countryCode='Argentina' height='35' />
    )
    const countryFlag = getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://hatscripts.github.io/circle-flags/flags/xx.svg'
    )
    expect(countryFlag.title).toBe('xx')
    expect(countryFlag.getAttribute('height')).toBe('35')
  })
})

describe('CircleFlagLanguage', () => {
  it('should render correctly with defaults', () => {
    const { getByTestId } = render(<CircleFlagLanguage />)
    const languageFlag = getByTestId('circle-language-flag')
    expect(languageFlag).toBeInTheDocument()
    expect(languageFlag.getAttribute('src')).toBe(
      'https://hatscripts.github.io/circle-flags/flags/language/xx.svg'
    )
    expect(languageFlag.title).toBe('xx')
    expect(languageFlag.getAttribute('height')).toBe('100')
  })

  it('should render correctly with props', () => {
    const { getByTestId } = render(
      <CircleFlagLanguage
        languageCode='en-us'
        height='35'
        title='United States'
      />
    )
    const languageFlag = getByTestId('circle-language-flag')
    expect(languageFlag).toBeInTheDocument()
    expect(languageFlag.getAttribute('src')).toBe(
      'https://hatscripts.github.io/circle-flags/flags/language/en-us.svg'
    )
    expect(languageFlag.title).toBe('United States')
    expect(languageFlag.getAttribute('height')).toBe('35')
  })
})
