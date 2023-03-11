// 以下是业务服务器API地址
// 本机开发时使用
var WxApiRoot = 'http://localhost:8080/';
// 局域网测试使用
// var WxApiRoot = 'http://192.168.0.100:8080/';

module.exports = {
  testUrlGet : WxApiRoot + "eventContent/test/allGet",
  testUrlPost : WxApiRoot + "eventContent/test/allPost"
};

