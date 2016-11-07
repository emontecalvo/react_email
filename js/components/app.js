var React = require('react');
var router = require('react-router');
var Link = router.Link;



var App = function(props) {

	return(
        <div>
            <h1>
               <Link to={'/email'}> Email App </Link>
            </h1>
            <div>
                {props.children}
            </div>
        </div>
	);
};



module.exports = App;