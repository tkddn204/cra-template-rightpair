import styled from 'styled-components'

export const Container = styled.main`
  text-align: center;
`

export const LogoContainer = styled.div`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-float infinite 3s ease-in-out;
  }

  @keyframes App-logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

export const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

export const Anchor = styled.a`
  color: rgb(112, 76, 182);
`

export const Paragraph = styled.p``
export const Code = styled.code``
export const Span = styled.span``
