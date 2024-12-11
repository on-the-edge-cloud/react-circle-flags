# react-circle-flags

> React circle flags (based on [circle-flags](https://github.com/HatScripts/circle-flags))

[![NPM](https://img.shields.io/npm/v/react-circle-flags.svg)](https://www.npmjs.com/package/react-circle-flags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/tnovau/react-circle-flags/branch/master/graph/badge.svg)](https://codecov.io/gh/tnovau/react-circle-flags) ![Node.js CI](https://github.com/tnovau/react-circle-flags/workflows/Node.js%20CI/badge.svg)

## Install

```bash
npm install --save react-circle-flags
```

## Usage

```jsx
import React from 'react'
import { CircleFlag } from 'react-circle-flags'

export const SpanishFlag = () => <CircleFlag countryCode="es" height="35" />
```

### With custom CDN

```jsx
import React from 'react'
import { CircleFlag } from 'react-circle-flags'

export const SpanishFlag = () => <CircleFlag countryCode="es" height="35" cdnUrl="https://magic-cdn.com/flags/" />
```

You can pass all the react's `React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>` props to CircleFlag. :rocket:

### Language flags

```jsx
import React from 'react'
import { CircleFlagLanguage } from 'react-circle-flags'

export const EnglishFlag = () => <CircleFlagLanguage languageCode="en-us" height="35" />
```

## Docs && Gallery

Click [here]([https://tnovau.github.io/react-circle-flags/](https://on-the-edge-cloud.github.io/react-circle-flags/))!

## License

MIT © [On The Edge IT Solutions](https://github.com/on-the-edge-cloud)
