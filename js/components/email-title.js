var React = require('react');
var router = require('react-router');
var Link = router.Link;

var EmailTitle = function(props) {
    return (
        <div>
        	<Link to={'/'+props.type+'/'+props.id}>
        		<strong>Title: </strong>{props.title}
        	</Link>
        </div>
    );
};

module.exports = EmailTitle;
