// index.js
// 获取应用实例
const app = getApp()

Page({
  getEventContents: function (e) {
    wx.request({
      url: 'http://localhost:8080/eventContent/test/all',
      success(res) {
        console.log(res.data)
      }
    })
  }
})
