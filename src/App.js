import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'



function App() {
    return (
        <div className="App">
		    <React.Fragment>
		      	<Navbar />
		      		<Router>
			      		<Switch>
			      			<Route path="/" exact component={ProductList} />
			      			<Route path="/details" component={Details} />
			      			<Route path="/cart" component={Cart} />
			      			<Route component={Default} />
			      		</Switch>
		      		</Router>
		    </React.Fragment>
    	</div>
    );
}

export default App;