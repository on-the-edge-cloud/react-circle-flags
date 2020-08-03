# react-circle-flags

> React circle flags (based on circle-flags repo)

[![NPM](https://img.shields.io/npm/v/react-circle-flags.svg)](https://www.npmjs.com/package/react-circle-flags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/tnovau/react-circle-flags/branch/master/graph/badge.svg)](https://codecov.io/gh/tnovau/react-circle-flags)

## Install

```bash
npm install --save react-circle-flags
```

## Usage

```jsx
import React from 'react'
import { CircleFlag } from 'react-circle-flags'

export const SpanishFlag = () => <CircleFlag country="es" height="35" />
```

You can pass all the react's `React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>` props to CircleFlag. :rocket:

## License

MIT © [tnovau](https://github.com/tnovau)
