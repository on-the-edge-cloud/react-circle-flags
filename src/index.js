import React from 'react'
import countries from './countries'
import languages from './languages'

const CDN_URL = 'https://react-circle-flags.pages.dev/'
const FILE_SUFFIX = 'svg'

const UNKNOWN_FLAG = 'xx'
const DEFAULT_HEIGHT = 100
const DEFAULT_WIDTH = 100

/**
 * @param {string} code
 * @param {string} cdnUrl
 * @param {DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>} otherProps
 * @param {string} cdnSuffix
 * @return {DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>}
 */
const getSvgProps = (code, cdnUrl, otherProps, cdnSuffix = '') => ({
  ...otherProps,
  title: otherProps.title || code,
  height: otherProps.height || DEFAULT_HEIGHT,
  width: otherProps.width || DEFAULT_WIDTH,
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
 * @param {DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>} props
 */
class SvgInline extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.loadSvg();
    console.log(this.ref.current);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.loadSvg();
    }
    debugger;
    console.log(this.ref.current);
  }

  loadSvg() {
    fetch(this.props.src)
      .then(res => res.text())
      .then(svgHTML => {
        if (this.ref.current) {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgHTML, 'image/svg+xml');
          /** @type {SVGSVGElement} */
          const svgElement = svgDoc.documentElement;
          for (const prop in this.props) {
            if (prop === 'src') continue;
            svgElement.setAttribute(prop, this.props[prop]);
          }

          this.ref.current.outerHTML = svgElement.outerHTML;
        }
      });
  }

  render() {
    return <img {...this.props} ref={this.ref} />;
  }
}

/**
 * @param {import('../index').CircleFlagProps} param0
 */
export const CircleFlag = ({ countryCode, cdnUrl, inline, ...otherProps }) => {
  const Component = inline ? SvgInline : 'img';
  return (
    <Component
      data-testid='circle-country-flag'
      {...getSvgProps(
        parseCountryCode(countryCode).toLowerCase(),
        cdnUrl,
        otherProps
      )}
    />
  )
}

/**
 * @param {import('../index').CircleFlagLanguage} param0
 */
export const CircleFlagLanguage = ({ languageCode, cdnUrl, inline, ...otherProps }) => {
  const Component = inline ? SvgInline : 'img';
  return (
    <Component
      data-testid='circle-language-flag'
      {...getSvgProps(
        parseLanguageCode(languageCode).toLowerCase(),
        cdnUrl,
        otherProps,
        'language/'
      )}
    />
  )
}

export { countries, languages }
