import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme } from 'Styles/themes'
import { themeSelector } from '../../Store/selectors'

const Provider: FC = ({ children }) => {
  const theme = useSelector(themeSelector)
  const themeObject = theme === 'dark' ? darkTheme : defaultTheme

  return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
}

export default Provider
