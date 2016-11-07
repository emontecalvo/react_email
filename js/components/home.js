var React = require('react');
var router = require('react-router');
var Link = router.Link;


var Home = function(props) {
    return (
        <div>
            <strong>
                <Link to={'/inbox'}>
                    Inbox
                </Link>
            </strong> <br />
             <strong>
                <Link to={'/spam'}>
                    Spam
                </Link>
            </strong>
        </div>
    );
};

module.exports = Home;
