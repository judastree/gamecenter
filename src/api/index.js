export function request (params) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: res => {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          wx.showToast({
            title: res.data.detail,
            icon: 'none'
          })
          reject(res.data.detail)
        }
      },
      fail: err => {
        console.log(err)
        reject(err)
      }
    })
  })
}
