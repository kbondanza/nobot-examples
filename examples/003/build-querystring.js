const querystring = require('querystring');

const apiHost = 'htpps://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = {
  assignee: 'kelly.bondanza',
  startAt: 2,
  maxResults: 2
}

const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;

console.log(`my jql api call is: ${apiUrl}`);