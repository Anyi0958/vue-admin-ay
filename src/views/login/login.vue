<template>
  <div class="login-container" @keyup.enter="submitForm('form')">
    <el-row :gutter="20" type="flex" justify="center" align="middle">
      <el-col class="content">
        <LangSwitch class="lange" color="#8c8c8c" size="20" />
        <div v-if="loginHeardType == 'title'" class="form-title">
          <router-link to="/register">
            {{ $t("login.title") }}
          </router-link>
        </div>

        <div v-if="loginHeardType == 'logo'" class="form-title-logo">
          <router-link to="/register">
            <img src="../../assets/an.png" alt="logo" height="120px" />
          </router-link>
        </div>

        <el-form ref="form" class="login-form" :model="form" :rules="ruleForm" :status-icon="true">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              v-emoji
              v-focus
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
            {{ $t("login.logIn") }}
          </el-button>
        </el-form>
      </el-col>
    </el-row>

    <footer-bar v-if="footerCopy" class="footBar"></footer-bar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let name = "登录";
import { login } from "@/api/user";
import LangSwitch from "@/components/LangSwitch";
const defaultSettings = require("@/config/settings.js");
import FooterBar from "@/views/layout/components/FooterBar";
export default {
  name: "Login",
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
        username: "admin",
        password: "123456",
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
    loginHeardType() {
      return defaultSettings.loginHeardType;
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

          this.$store
            .dispatch("user/login", data)
            .then(res => {
              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
$min-width: 500px;
.login-container {
  @include relative;
  @include flex;
  // @include backgroundImageCover("http://api.neweb.top/bing.php?type=rand");
  @include backgroundImageCover("https://api.ixiaowai.cn/gqapi/gqapi.php");

  &::before {
    @include backgroundMask;
  }
  .lange {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 60;
    cursor: pointer;
  }
  .content {
    position: relative;
    z-index: 12;
    padding: 20px 30px 50px 30px !important;
    background: #fff;
    border-radius: 5px;

    @include boxShadow(#ccc);
    .form-title,
    .form-title-logo {
      margin: 20px 0 40px 0;
      font-size: 1.5em;
      font-weight: bold;
      line-height: 38px;
      text-align: center;
    }
    .form-title-logo {
      margin: 0 0 10px 0;
    }
    .login-form {
      flex-direction: column;
      width: 340px;

      @include flex;
      div {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    .login-submit {
      width: 100%;
      height: 40px;
      margin-top: 10px;
    }
  }
  .footBar {
    position: absolute;
    bottom: 0;
    height: 40px;
  }
}
</style>
