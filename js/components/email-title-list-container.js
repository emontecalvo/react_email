var React = require('react');

var EMAILS = require('../emails');
var EmailTitleList = require('./email-title-list');

var EmailTitleListContainer = function(props) {
    var emails = EMAILS[props.params.mailbox_name];
    return <EmailTitleList emails={emails} type={props.params.mailbox_name} />;
};

module.exports = EmailTitleListContainer;
