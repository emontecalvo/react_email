require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Home = require('./components/home');
var App = require('./components/app');
var EmailContainer = require('./components/email-container');
var EmailTitleListContainer = require('./components/email-title-list-container');


var routes = (
	<Router history={hashHistory}>
		<Route path="/email" component={App} >
			<IndexRoute component={Home} />
		</Route>
		<Route path="/:mailbox_name" component={App}>
			<IndexRoute component={EmailTitleListContainer} />
			<Route path=":emailId" component={EmailContainer} />

		</Route>
	</Router>

);

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(routes, document.getElementById('app'));
});

