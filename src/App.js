import React from 'react';
import './App.css';
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<Switch>
			<Route path="/" component={LandingPage} exact={true}/>
			<Route path="/dashboard" component={Dashboard} exact={true}/>
		</Switch>
	</BrowserRouter>
    </div>
  );
}

export default App;
