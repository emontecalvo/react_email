var React = require('react');
var EmailTitle = require('./email-title');



var EmailTitleList = function(props) {
	var emails = Object.keys(props.emails).map(function(emailId) {
		var email = props.emails[emailId];
		return (
			<li>
				<EmailTitle title={email.title} type={props.type} id={email.id}/>
			</li>
		)
	});
    return (
        <div>
        	<h2>Email Type: {props.type}</h2><br/>
           {emails}
        </div>
    );
};

module.exports = EmailTitleList;