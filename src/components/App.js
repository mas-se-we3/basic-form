import './App.css'
import { Component } from 'react'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: 'Max',
			lastName: 'Power'
		}
	}

	render() {
		return (
			<div>
				<h1>Form</h1>
				<label className="form-label">
					First Name
					<input value={this.state.firstName} />
				</label>
				<label className="form-label">
					Last Name
					<input value={this.state.lastName} />
				</label>
				<div>
					{this.state.firstName.toUpperCase()}{' '}
					{this.state.lastName.toUpperCase()}
				</div>
			</div>
		)
	}
}

export default App
