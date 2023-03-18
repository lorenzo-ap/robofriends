import React, { Component } from 'react'

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError ?
      <h1>Oooops. That is not good..</h1> :
      this.props.children;
  }
}

export default ErrorBoundry