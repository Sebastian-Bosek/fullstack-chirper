import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './scss/app';
import Home from './Home';
import Details from './Details';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
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
				<h1 className="text-primary text-center"> {}</h1>
				<BrowserRouter>
				<Switch>
					<Route exact path = "/" component={Home} />
					<Route exact path ="/:id" component={Details} />
					<Route exact path ="chirp/add" />
					<Route exact path ="/chirp/:id/admin" />
				</Switch>
				</BrowserRouter>


			</main>
		);
	}
}

export interface IAppProps {
	chirps:{
		id: string,
		username: string,
		message: string
	}
}

export interface IAppState {
	

	chirps:{
		id: string,
		username: string,
		message: string
	}
}

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
