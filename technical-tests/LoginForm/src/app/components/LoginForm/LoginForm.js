import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends PureComponent {
    static propTypes = {
        onLogin: PropTypes.func
    };

    state = {
        formData: {
            username: '',
            password: ''
        }
    };

    render() {
        const { formData: { username, password } } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <img src="https://media0.giphy.com/media/v0FyPXlOqQOQw/200w.webp?cid=790b76115cc800667772546941a815e8&rid=200w.webp" />
                </fieldset>

                <div>
                    <Input value={username} onChange={this.handleInputUpdate} placeholder="Username" name="username" />
                </div>
                <div>
                    <Input value={password} onChange={this.handleInputUpdate} placeholder="*****" name="password" type="password" />
                </div>
                <button type="submit" disabled={!this.isFormValid}>
                    Sign in
                </button>
            </form>
        );
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid) {
            this.props.onLogin(this.state.formData);
        }
    };

    handleInputUpdate = event => {
        const { name, value } = event.target;
        const { formData } = this.state;

        this.setState({
            formData: {
                ...formData,
                [name]: value
            }
        });
    };

    get isFormValid() {
        const { formData: { username, password } } = this.state;

        return username && password;
    }
}

function Input({ value, onChange, name, placeholder, type = 'text' }) {
    return <input value={value} onChange={onChange} placeholder={placeholder} name={name} type={type} />;
}

export default LoginForm;
