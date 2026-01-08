import {Component} from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })

        console.error('Error:', error)
        console.error('Error Info:', errorInfo)
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{padding: '40px', textAlign: 'center', fontFamily: 'Arial'}}>
                    <h1 style={{fontSize: '32px', color: '#d32f2f'}}>Something went wrong</h1>
                    <p style={{fontSize: '16px', color: '#666'}}>
                        {this.state.error && this.state.error.toString()}
                    </p>

                    <details style={{
                        margin: '20px 0',
                        textAlign: 'left',
                        maxWidth: '500px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        <summary style={{cursor: 'pointer', fontWeight: 'bold'}}>Error details</summary>
                        <pre style={{background: '#f5f5f5', padding: '10px', overflow: 'auto', fontSize: '12px'}}>
                            {this.state.error && this.state.error.stack}
                        </pre>
                    </details>

                    <div style={{marginTop: '20px'}}>
                        <button
                            style={{
                                padding: '10px 20px',
                                marginRight: '10px',
                                background: '#1976d2',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                            onClick={this.handleReset}
                        >
                            Try again
                        </button>
                        <button
                            style={{
                                padding: '10px 20px',
                                background: '#ccc',
                                color: '#333',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                            onClick={() => window.location.href = '/'}>
                            Go home
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
