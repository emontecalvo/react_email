var React = require('react');



var Email = function(props) {
	return(
		<div>
			<li>{props.to}</li>
			<li>{props.from}</li>
			<li>{props.title}</li>
			<li>{props.content}</li>
		</div>

	)


};

module.exports = Email;