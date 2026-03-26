import { CircleFlag, countries } from 'react-circle-flags';

const itemStyle = {
  textAlign: 'center',
  padding: '1em',
  width: '160px',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

export function Gallery() {
  return (
    <div style={containerStyle}>
      {Object.keys(countries).map((countryCode) => (
        <div key={countryCode} style={itemStyle}>
          <CircleFlag
            countryCode={countryCode}
            cdnUrl="https://react-circle-flags.pages.dev/"
          />
          <p>
            <span>{countryCode.toUpperCase()}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
