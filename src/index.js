const express = require('express');
const { AccessTokenApi, SnsAccessTokenApi } = require('tnwx');
require('./tnwx');
const PORT = 3010;
const app = express();

// 获取access_token
app.get('/getAccessToken', async (req, res) => {
  const accessToken = await AccessTokenApi.getAccessToken();
  res.send(accessToken);
});
app.get('/getSnsAccessToken', async (req, res) => {
  const accessToken = await SnsAccessTokenApi.getSnsAccessToken(req.query.code);
  res.send(accessToken);
});

app.get('/authorizeUrl', async (req, res) => {
  const { redirectUri, scope, state } = req.query;
  const url = await SnsAccessTokenApi.getAuthorizeUrl(redirectUri, scope, state);
  res.redirect(url);
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('express server start on ' + PORT);
  }
})