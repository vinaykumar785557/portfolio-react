import { Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home}></Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/skills'>
					<Skills />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
