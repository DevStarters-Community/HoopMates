// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow triggered')
    setTimeout(() => {
      console.log('Attempting to switch tab')
      wx.switchTab({
        url: '/pages/home/home',
        success: () => console.log('Switched tab successful'),
        fail: (error) => console.log('Switch tab failed', error)
      });
    }, 2000);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 因为小程序不支持 mailto 链接，所以采用点击文本触发一个复制的函数
  copyEmail: (e) => {
    wx.setClipboardData({
      data: e.currentTarget.dataset.email,
      success: () => {
        wx.showToast({
          title: '邮箱已复制到剪贴板',
          icon: 'none'
        })
      }
    })
  }
})