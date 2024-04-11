// pages/match/match.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    matches: [
      {
        id: 1,
        name: "篮球友谊赛",
        time: "2024年4月15日 18:00",
        location: "市体育中心"
      },
      {
        id: 2,
        name: "老兵队 VS 深大传播",
        time: "2024年4月16日 18:00",
        location: "深圳大学小球馆"
      },
      {
        id: 3,
        name: "安托山土匪 VS 洛杉矶湖人",
        time: "2024年4月17日 18:00",
        location: "高时体育中心"
      }
    ]
  },

  viewMatchDetail: (e) => {
    const matchId = e.currentTarget.dataset.id;
    console.log('/pages/matchDetail/match-detail?id=' + matchId);
    wx.navigateTo({
      url: '/pages/match-detail/match-detail?id=' + matchId,
    })
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

  }
})