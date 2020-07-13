import React from 'react';

// Use class components to hook into life-cycle methods
class ErrorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidMount() {
        window.onerror = (error) => {
            this.setState({ hasError: true });
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    
    render() {
        if (this.state.hasError) {
            return <div>Ugly Error</div>;
        }
        return this.props.children;
    }
}

export default ErrorContainer;  