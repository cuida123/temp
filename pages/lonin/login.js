// pages/lonin/login.js
Page({
  /**
   * 页面的初始数据
   */

  val: null,
  val1: null,
  data: {
    yangshi:"inline-block",
    yhm:"",
    mm:"",
  },
  bindInput: function (e) {
    this.setData({
      val:e.detail.value   
    })
  },
  bindnput1: function (e) {
    this.setData({
      val1: e.detail.value
    })
  },
  djbys:function(){
    this.setData({
      yangshi:"none"
    })
  },
  dlu: function () {
    wx.showToast({
      title: '账号或密码不正确',
      icon: 'none',
      duration: 2000
    })
   console.log(this.data.val)
   console.log(this.data.val1)
   this.setData({
     val:"",
     val1: ""
   })
    setTimeout(() => {
      wx.hideToast(); //隐藏
    }, 3000)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})