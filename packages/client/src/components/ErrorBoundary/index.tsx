import { ErrorInfo, ReactNode } from 'react'
import React, { Component } from 'react'
import { Page500 } from '@/pages/Page_500'

interface Props {
  children?: ReactNode
  fallback?: React.FC<{ errorMessage: string }>
}

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.errorInfo) {
      return this.props.fallback ? (
        this.props.fallback({ errorMessage: this.state.error?.message ?? '' })
      ) : (
        <Page500 />
      )
    }
    return this.props.children
  }
}
