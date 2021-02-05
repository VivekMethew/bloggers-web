import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/header';
import About from './component/About';
import Error from './component/Error';
import NewBlogs from './component/NewBlogs';
import Profile from './component/Profile';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/blogs" component={NewBlogs} />
					<Route path="/profile/:userid " component={Profile} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
