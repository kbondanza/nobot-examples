const log = require('./helpers/log');

const {ERROR, WARNING, SUCCESS} = require('./constants/message-types');

log('This is a success message', SUCCESS);
log('warning message', WARNING);
log('info message', ERROR);
