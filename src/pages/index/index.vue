<template>
  <div>
    <div class="title">小游戏列表</div>
    <ul class="game-list weui-grids">
      <li v-for="(item,index) in list"
          v-bind:key="index"
          v-on:click="gotoGameDetail(item)"
          class="game-item  weui-grid">
        <div class="weui-grid__icon">
          <img :src="item.icon" class="game-icon ">
        </div>

        <div class="game-name weui-grid__label">{{item.name}}</div>
      </li>
      {{list.name}}
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data: {
      list: [
        {
          icon: '../../static/images/catchsecond.png',
          name: '抓住1秒',
          target: 'catchsecond'
        },
        {
          icon: '../../static/images/24.png',
          name: '算24点',
          target: '24point'
        },
        {
          icon: '../../static/images/qidai.png',
          name: '敬请期待',
          target: 'none'
        }
      ]
    },
    methods: {
      gotoGameDetail: function (item) {
        wx.navigateTo('/catchsecond')
      }
    },
    created () {
    }
  }
</script>

<style scoped lang="less">

  @import "../../styles/global";

  .title {
    background-color: #f7f7f7;
    font-size: 28 rpx;
    padding: 10 rpx;
  }

  .weui-grid__label {
    font-size: 30 rpx;
  }

  .game-list {
    color: @font_grey;

  }
</style>
