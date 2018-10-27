const app = getApp()
const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')

Page({
  data: {
    array: ['Cuisine Types','Chinese', 'Japanese', 'Korean', 'American'],
    index: 0,
    date: currentDate,
    time: '12:00',
    text:''
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
    // TODO: update database
    wx.navigateTo({
      url: '../searchingMatch/searchingMatch',
    })
  }
});
