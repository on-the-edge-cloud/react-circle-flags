import React from 'react'
import { render } from '@testing-library/react'
import { CircleFlag, CircleFlagLanguage } from '.'

describe('CircleFlag', () => {
  it('should render correctly with defaults', () => {
    const screen = render(<CircleFlag />)
    const countryFlag = screen.getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://react-circle-flags.pages.dev/xx.svg'
    )
    expect(countryFlag.title).toBe('xx')
    expect(countryFlag.getAttribute('height')).toBe('100')
  })

  it('should render correctly with props', () => {
    const screen = render(
      <CircleFlag countryCode='ar' height='35' title='Argentina' />
    )
    const countryFlag = screen.getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://react-circle-flags.pages.dev/ar.svg'
    )
    expect(countryFlag.title).toBe('Argentina')
    expect(countryFlag.getAttribute('height')).toBe('35')
  })

  it('should render correctly with cdnUrl parameter', () => {
    const screen = render(
      <CircleFlag
        countryCode='ar'
        height='35'
        title='Argentina'
        cdnUrl='https://magic-cdn.com/flags/'
      />
    )
    const countryFlag = screen.getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://magic-cdn.com/flags/ar.svg'
    )
  })

  it('should render UNKNOWN_FLAG if the countryCode is not in countries', () => {
    const screen = render(
      <CircleFlag countryCode='Argentina' height='35' />
    )
    const countryFlag = screen.getByTestId('circle-country-flag')
    expect(countryFlag).toBeInTheDocument()
    expect(countryFlag.getAttribute('src')).toBe(
      'https://react-circle-flags.pages.dev/xx.svg'
    )
    expect(countryFlag.title).toBe('xx')
    expect(countryFlag.getAttribute('height')).toBe('35')
  })
})

describe('CircleFlagLanguage', () => {
  it('should render correctly with defaults', () => {
    const screen = render(<CircleFlagLanguage />)
    const languageFlag = screen.getByTestId('circle-language-flag')
    expect(languageFlag).toBeInTheDocument()
    expect(languageFlag.getAttribute('src')).toBe(
      'https://react-circle-flags.pages.dev/language/xx.svg'
    )
    expect(languageFlag.title).toBe('xx')
    expect(languageFlag.getAttribute('height')).toBe('100')
  })

  it('should render correctly with props', () => {
    const screen = render(
      <CircleFlagLanguage
        languageCode='en-us'
        height='35'
        title='United States'
      />
    )
    const languageFlag = screen.getByTestId('circle-language-flag')
    expect(languageFlag).toBeInTheDocument()
    expect(languageFlag.getAttribute('src')).toBe(
      'https://react-circle-flags.pages.dev/language/en-us.svg'
    )
    expect(languageFlag.title).toBe('United States')
    expect(languageFlag.getAttribute('height')).toBe('35')
  })
})
