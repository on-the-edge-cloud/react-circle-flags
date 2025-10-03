import React from 'react'
import { CircleFlag, countries } from 'react-circle-flags'

export const Container = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}
  >
    {children}
  </div>
)

export const Item = ({ children }) => (
  <div
    style={{
      textAlign: 'center',
      padding: '1em',
      width: '160px'
    }}
  >
    {children}
  </div>
)

export const Gallery = () => (
  <>
    {Object.keys(countries).map((countryCode) => (
      <Item key={countryCode}>
        <CircleFlag
          countryCode={countryCode}
          cdnUrl='https://react-circle-flags.pages.dev/'
        />
        <p>
          {countryMap[countryCode]} (<span>{countryCode.toUpperCase()}</span>)
        </p>
      </Item>
    ))}
  </>
)
