const core = require('@actions/core');
const axios = require('axios');

try {
  const slackWebhook = core.getInput('slack-webhook');
  const message = core.getInput('message');
  const channel = core.getInput('channel');

  const payload = {
    text: message,
    channel: channel
  };

  axios.post(slackWebhook, payload);
  core.setOutput('message-sent', 'true');

} catch (error) {
  core.setFailed(error.message);
}
