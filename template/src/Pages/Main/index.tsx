import React, { FC } from 'react'
import Counter from 'Components/Counter'
import { Logo } from 'Svgs'
import {
  Anchor,
  Code,
  Container,
  Header,
  LogoContainer,
  Paragraph,
  Span,
} from './styled'

const Main: FC = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Counter />
        <Paragraph>
          Edit <Code>src/Pages/Main/index.tsx</Code> and save to reload.
        </Paragraph>
        <Span>
          <Span>Learn </Span>
          <Anchor
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </Anchor>
          <Span>, </Span>
          <Anchor
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </Anchor>
          <Span>, </Span>
          <Anchor
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </Anchor>
          ,<Span> and </Span>
          <Anchor
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </Anchor>
        </Span>
      </Header>
    </Container>
  )
}

export default Main
