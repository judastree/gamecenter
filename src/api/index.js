export function request (params) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: res => {
        if (res.data) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: '请求失败',
            icon: 'none'
          })
          reject(res.data)
        }
      },
      fail: err => {
        console.log(err)
        reject(err)
      }
    })
  })
}
