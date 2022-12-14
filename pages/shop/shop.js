import ShopModel from "../../model/shop"
import {navigateTo} from "../../utils/navigate"
import {getShopCode} from "../../common/cart"


// pages/shop/shop.js
Page({
  // 获取轮播图数据
  async getBanner(){
    const response = await ShopModel.getShopBanner()
    this.setData({
      bannerData : response.data
    })
  },
  // 获取商品信息
  getShopCode:getShopCode,
  /**
   * 页面的初始数据
   */
  data: {
    bannerData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBanner()
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