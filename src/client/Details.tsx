import * as React from 'react'; //import * as React from 'react'; //import React from 'react';
import { RouteComponentProps } from 'react-router-dom';



class Details extends React.Component<DetailsProps, DetailsState> {
	constructor(props: DetailsProps) {
		super(props);
		this.state = {

				id: this.props.match.params.id,
			message: this.props.match.params.message,
			username: this.props.match.params.username
			
		};
	}

	// async componentDidMount() {
	// 	try {
	// 		let r = await fetch('/api/hello');
	// 		let chirp = await r.json();
	// 		this.setState({ chirp });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center" > {this.props.match.params.message } {console.log(this.props.match.params.message)} {console.log(this.props.match.params.id)} {this.props.match.params.id} Hi</h1>
				<h3 className="text-primary text-center">{this.props.match.params.username}</h3>
                </main>
        )};

        }

		interface DetailsProps extends RouteComponentProps<{ id: string, username: string, message: string}> {
			
		}

		interface DetailsState {
			

			
		}

        export default Details;