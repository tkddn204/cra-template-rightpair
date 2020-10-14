export type ThemeType = {
  colors: {
    primary: string
  }
}

export const defaultTheme: ThemeType = {
  colors: {
    primary: 'black',
  },
}

export const darkTheme: ThemeType = {
  colors: {
    primary: 'white',
  },
}
