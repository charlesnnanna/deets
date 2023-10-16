import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(0, 24, 34)',
    },
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.amber,
          gray: colors.gray,
          blue: colors.violet,
          red: colors.red,
          slate: colors.slate,
      },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
