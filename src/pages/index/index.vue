<template>
  <div>
    <ul class="game-list ">
      <li v-for="(item,index) in list"
          v-bind:key="index"
          v-on:click="gotoGameDetail(item)"
          class="game-item">
        <div class="game-image">
          <img :src="item.poster" width="100%" height="">
        </div>
      </li>
      <li>
        <ad unit-id="adunit-0280b5c185c4eef1"></ad>
      </li>
    </ul>
  </div>
</template>

<script>
  import { request } from '../../api'

  export default {
    name: 'list',
    data: {
      list: []
    },
    methods: {
      gotoGameDetail (item) {
        wx.previewImage({
          urls: [item.qr_img] // 需要预览的图片http链接列表
        })
      },
      getGameList () {
        request({
          url: 'https://judastree.cn/api/game_list.json',
          method: 'GET'
        }).then(data => {
          this.list = data
        })
      }
    },
    created () {
      this.getGameList()
    }

  }
</script>

<style scoped lang="less">

  @import "../../styles/global";

  .title {
    background-color: #f7f7f7;
    font-size: 28 rpx;
  }

  .game-list {
    img {
      width: 100vw;
      height: 40vw;
    }

  }
</style>
