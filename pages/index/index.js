// index.js
var api = require('../../config/api.js');

// 获取应用实例
const app = getApp()

Page({
  data : {
    status: 0,
    msg: "",
    isGetResult : false,
    resultJson : []
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
          status: res.data.status,
          msg: res.data.msg,
          resultJson: res.data.data
        });
        wx.showToast({
          title: res.data.msg+ "(" + res.data.status + ")"
        });
      }
    })
  }
})
