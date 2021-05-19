import React from "react";
class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };
    render() {
        return(
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                <div className="content">
                    <div className="sub">
                        <div><input className="email" type="email" name="email" placeholder="email" onChange={this.handleChange}></input></div>
                        <div><input className="password" type="password" name="password" placeholder="password" onChange={this.handleChange}></input></div>
                        <button className="btnsubmit" type="submit">Login</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default LoginForm;