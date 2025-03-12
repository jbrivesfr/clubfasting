import React from 'react'

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const ClubFastingLogo: React.FC<LogoProps> = ({
  className = "",
  width = 240,
  height = 80
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* CLUB in bold orange serif font */}
      <path d="M32.7 57.8C25.5 57.8 21 53.2 21 45.8C21 38.4 25.5 33.8 32.6 33.8C35.9 33.8 38.7 34.9 40.6 37L37.8 40C36.5 38.7 34.7 38 32.7 38C28.3 38 25.7 41 25.7 45.8C25.7 50.6 28.3 53.6 32.7 53.6C34.8 53.6 36.5 52.9 37.9 51.6L40.7 54.6C38.8 56.7 36 57.8 32.7 57.8Z" fill="#f76f20"/>
      <path d="M55.1 57.8H42.6V33.8H55.1C62.2 33.8 66.7 38.4 66.7 45.8C66.7 53.2 62.2 57.8 55.1 57.8ZM55 53.6C59.5 53.6 62 50.6 62 45.8C62 41 59.5 38 55 38H47.3V53.6H55Z" fill="#f76f20"/>
      <path d="M77.5 57.8H72.9V33.8H77.5V43.3H89.5V33.8H94.1V57.8H89.5V47.5H77.5V57.8Z" fill="#f76f20"/>
      <path d="M113.9 57.8H99.9V33.8H113.9C121 33.8 125.5 38.4 125.5 45.8C125.5 53.2 121 57.8 113.9 57.8ZM113.8 53.6C118.3 53.6 120.8 50.6 120.8 45.8C120.8 41 118.3 38 113.8 38H104.6V53.6H113.8Z" fill="#f76f20"/>

      {/* FASTING in black handwritten style */}
      <path d="M136 35.5C141.8 33.5 147.7 32.9 150.5 35.5C151.7 36.7 152.4 38.3 150.5 40.8C148.9 42.8 146.5 44.5 144.3 46.8C143.5 47.6 143 48.2 143.5 49.2C144 50.2 145 49.8 146 49.2C149.5 47.2 152.5 44.2 156 42.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M156 35.5C159.7 34.8 162.5 35.5 163.5 38.2C163.8 39.2 163.8 40.5 163 41.8C162.2 43.1 161 44.2 159.8 45.2C158.2 46.5 157 47.5 157.7 49.2C158.2 50.5 160 50.2 161.5 49.2C164.7 47.2 167 44.5 170 42.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M161 33C163.3 34.2 166 35.8 167.7 38.3C169.5 40.8 170.5 44.3 169.8 47.2C169.1 50.1 167.8 52.4 165.5 54.2C162.8 56.2 159.5 57.2 156 57.2" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M171 35.2H183" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M175 35.2C175 39.5 175 43.8 175 48.1C175 50.1 175.2 52.1 176.5 53.8C177.8 55.5 180.2 56.5 182.5 56.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M185 40.2C187.7 37.2 190.3 35.3 192.7 35.2C195.2 35 197.3 36.7 198.7 39.2C200 41.7 200.5 45 200.5 48.2C200.5 51.3 200 54.3 198.7 56.2C197.3 58.1 195.2 58.8 192.7 58.2C190.3 57.5 187.7 55.5 185 52.2" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
