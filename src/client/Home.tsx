import React from 'react'; //import * as React from 'react';
import Details from './Details';
import {RouteComponentProps, Link} from 'react-router-dom';

class Home extends React.Component<HomeProps, HomeState> {
	constructor(props: HomeProps) {
		super(props);
		this.state = {
			chirps: []
		};
	}

	async componentDidMount() {
		// try {
			let r = await fetch('/api/hello');
			let data = await r.json(); //chirps
			let chirps = Object.keys(data).map(key => ({
				
					id: key,
					username: data[key].username,
					message: data[key].message
				
			}));
			chirps.pop();
			chirps.reverse();
			this.setState({ chirps });
		// } catch (error) {
		// 	console.log(error);
		// }
	}

    render() {
		return (
			<main className="col my-5">
				<h1 className="text-primary text-center">Hello {/*this.state.name*/}!</h1>

				
					
					{this.state.chirps.map(chirp => {
						return(
						<div className="card my-2 shadow">
						<Link key={chirp.id} to={`/${chirp.id}`}  className="card-body text-center">
						
						<h5 className="card-title" >{chirp.username} {console.log(chirp.username)}</h5>
						<p className="card-text" >{chirp.message} {console.log(chirp.message)}</p>
						</Link>
						</div>
						)
					} )}
					{/* {this.state.chirps.map(chirp => {return <div>{this.state.chirps}</div>})} */}
					
				
                </main>
        )};

        }

		interface HomeProps {
			chirps: {
				id: string,
				username: string,
				message: string
			}[];
		}

	export interface HomeState {
			chirps: {
				id: string,
				username: string,
				message: string
			}[];
		};

        export default Home;