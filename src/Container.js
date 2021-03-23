import React, { Component } from 'react'
import App from './Components/App'
import styled from '@emotion/styled'

const AppContainer = styled('body')`
  background-color: #ffeee8;
  height: 100vh;
`

export default class Container extends Component {
  render() {
    return (
      <AppContainer>
        <App />
      </AppContainer>
    )
  }
}
