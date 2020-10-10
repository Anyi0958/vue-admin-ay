<template>
  <div class="home">
    <el-row>
      <el-time-select
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
      ></el-time-select>
      <el-button>默认按钮</el-button>
      <el-button type="primary">{{ $t("route.dashboard") }}</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>

      <i-button type="info">{{ $t("route.dashboard") }}</i-button>
      <i-button type="primary">primary</i-button>
      <i-button type="warning">Warning</i-button>
      <i-button type="error">Error</i-button>
    </el-row>
    <i-col>
      <i-date-picker type="date" style="width: 200px"></i-date-picker>
    </i-col>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div class="block">
      <span class="demonstration">显示总数</span>
      <el-pagination
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>

    <i-page :total="100" show-total />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  mounted() {
    console.log(process.env);
  },
  methods: {},
};
</script>
