// src= https://medium.com/@tmkelly28/handling-multiple-form-inputs-in-react-c5eb83755d15

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		// check it out: we get the evt.target.name (which will be either "email" or "password")
		// and use it to target the key on our `state` object with the same name, using bracket syntax
		this.setState({ [evt.target.name]: evt.target.value });
	}

	render() {
		return (
			<form>
				<label>Email</label>
				<input type="text" name="email" onChange={this.handleChange} />

				<label>Password</label>
				<input type="password" name="password" onChange={this.handleChange} />
			</form>
		);
	}
}
