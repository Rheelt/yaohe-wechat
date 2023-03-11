// index.js
var api = require('../../config/api.js');

// 获取应用实例
const app = getApp()

Page({
  data : {
    isGetResult : false,
    resultJson : null
  },
  getEventContents: function (e) {
    let that = this;
    wx.request({
      url: api.testUrlGet,
      method : "GET",
      success(res) {
        console.log(res);
        that.setData({
          isGetResult: true,
          resultJson: res.data
        });
      }
    })
  }
})
