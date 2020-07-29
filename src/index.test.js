import React from 'react'
import { render } from '@testing-library/react'
import { CircleFlag } from '.'

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
})
