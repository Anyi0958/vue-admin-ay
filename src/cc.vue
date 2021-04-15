<template>
  <!-- 头部 -->
  <view class="an-section">
    <view class="title">
      <text>{{ title }}</text>
    </view>
    <view class="subTitle" @click="headClick()">
      <view v-if="right">
        <text>{{ subTitle }}</text>
        <!-- <u-icon v-if="subIcon" name="arrow-right" color="#666666" :size="26"></u-icon> -->
        <image v-if="subIcon" src="../../static/image/index/next.png" class="next"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "AnSection",
  //属性
  props: {
    // 左边主标题
    title: {
      type: String,
      default: "",
      require: false,
    },
    // 是否显示右边的内容
    right: {
      type: Boolean,
      default: true,
      require: false,
    },
    // 右边副标题
    subTitle: {
      type: String,
      default: "全部",
      require: false,
    },
    // 是否显示右边icon
    subIcon: {
      type: Boolean,
      default: true,
      require: false,
    },
  },
  //组件生命周期
  created: function (e) {},
  methods: {
    headClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.an-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rpx 0;
  .title {
    position: relative;
    padding-left: 25rpx;
    font-size: 36rpx;
    font-weight: 500;
    color: #333;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      width: 12rpx;
      height: 36rpx;
      margin-top: -18rpx;
      content: "";
      background-color: #338bff;
    }
  }
  .subTitle {
    font-size: 26rpx;
    font-weight: 300;
    color: #666;
    & > view {
      display: flex;
      align-items: center;
    }
    // text {
    //   margin-right: 8rpx;
    // }
    .next {
      width: 48rpx;
      height: 48rpx;
    }
  }
}
</style>
