<template>
  <div class="login-container" @keyup.enter="submitForm('form')">
    <el-row :gutter="20" type="flex" justify="center" align="middle">
      <el-col class="content">
        <LangSwitch class="lange" color="#8c8c8c" size="20" />
        <el-form ref="form" class="login-form" :model="form" :rules="ruleForm" :status-icon="true">
          <h2>
            <router-link to="/login">
              {{ $t("login.title") }}
            </router-link>
          </h2>
          <br />

          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              v-focus
              v-emoji
              clearable
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              v-emoji
              type="password"
              clearable
              show-password
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>

          <el-button
            :loading="loading"
            class="login-submit"
            type="primary"
            @click="submitForm('form')"
          >
            {{ $t("login.register") }}
          </el-button>
        </el-form>
      </el-col>
    </el-row>

    <footer-bar v-if="footerCopy"></footer-bar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let name = "注册";
import Cookies from "js-cookie";
import { regist } from "@/api/user";
import LangSwitch from "@/components/user/LangSwitch";
const defaultSettings = require("@/config/settings.js");
import FooterBar from "@/components/FooterBar";
export default {
  name: "Register",
  //import引入的组件需要注入到对象中才能使用
  components: {
    LangSwitch,
    FooterBar,
  },
  data() {
    //这里存放数据
    return {
      loading: false,
      form: {
        username: "",
        password: "",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {
    ruleForm() {
      return {
        username: [{ required: true, message: this.$t("login.usererr"), trigger: "blur" }],
        password: [{ required: true, message: this.$t("login.passerr"), trigger: "blur" }],
      };
    },
    footerCopy() {
      return defaultSettings.footerCopy;
    },
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          let data = Object.assign({}, this.form);

          regist(data).then(res => {
            this.loading = false;
            if (res.success) {
              this.$router.push({ name: "Login" });
            }
          });
        }
      });
    },
  },
};
</script>
