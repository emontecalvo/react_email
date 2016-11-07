var React = require('react');
var Email = require('./email');
var EMAILS = require('../emails');

var EmailContainer = function(props) {
	var email = EMAILS[props.params.mailbox_name][props.params.emailId];
	return <Email content={email.content} to={email.to} from={email.from} title={email.title} />


};

module.exports = EmailContainer;