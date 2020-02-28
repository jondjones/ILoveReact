import React from 'react';
import Modal from './Modal';

// Use class components to hook into life0cycle methods
class ErrorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidMount() {
        window.onerror = (error) => {
            if (error === 'Uncaught Error: 500' || error === 'Uncaught Error: 401') {
                this.setState({ hasError: true });
            } else
                console.log('Ignorable Error');
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    
    render() {
        if (this.state.hasError) {
            return <Modal show={this.state.hasError}></Modal>;
        }
        return this.props.children;
    }
}

export default ErrorContainer;  