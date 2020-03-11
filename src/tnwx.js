const tnwx = require('tnwx');
const config = require('./config.json');
const {
  ApiConfigKit,
  ApiConfig,
} = tnwx;

const apiConfig = new ApiConfig();
Object.keys(config).forEach(key => {
  apiConfig[key] = config[key];
});

// 微信公众号、微信小程序、微信小游戏 支持多应用
ApiConfigKit.putApiConfig(apiConfig);
// 开启开发模式,方便调试
ApiConfigKit.devMode = true;
// 设置当前应用
ApiConfigKit.setCurrentAppId(apiConfig.getAppId);

// module.exports.getAccessToken = async () => {
//   return await AccessTokenApi.getAccessToken();
// }
// module.exports.getAuthorizeUrl = async (redirectUri, scope, state) => {
//   return await SnsAccessTokenApi.getAuthorizeUrl(redirectUri, scope, state);
// }
// module.exports.getSnsAccessToken = async (code) => {
//   const snsAccessToken = await SnsAccessTokenApi.getSnsAccessToken(code);
//   return snsAccessToken;
// }