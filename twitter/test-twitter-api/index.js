const Twitter = require('twitter');
const config = require('./twitter-config');

const client = new Twitter(config);
const params = {
  status: '[Test]I Love Twitter.'
};

client.post('statuses/update', params, (error, tweet, response) => {
  if (error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
