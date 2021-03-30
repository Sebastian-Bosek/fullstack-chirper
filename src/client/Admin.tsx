import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class Admin extends React.Component<AdminProps, AdminState> {
	constructor(props: AdminProps) {
		super(props);
		this.state = {
			chirps: {
				id: null,
				username: null,
				message: null
			}
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let chirps = await r.json();
			this.setState({ chirps });
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">Hello {/*this.state.name*/}!</h1>
                </main>
        )};

        }

		interface AdminProps {

		}

		interface AdminState {
			chirps: {
				id: null,
				username: null,
				message: null
			}
		}

        export default Admin;