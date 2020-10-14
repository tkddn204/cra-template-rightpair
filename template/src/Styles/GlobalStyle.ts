import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Nanum Gothic', '맑은 고딕', malgun gothic, -apple-system, BlinkMacSystemFont, sans-serif, 'Apple Color Emoji', 'Noto Color Emoji';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    word-break: keep-all;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul, li, ol {
    list-style: none;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

export default GlobalStyle
