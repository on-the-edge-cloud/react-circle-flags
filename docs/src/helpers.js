import React from 'react'

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
