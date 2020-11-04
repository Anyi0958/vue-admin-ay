<template>
  <div class="login-container" @keyup.enter="submitForm('form')">
    <el-row :gutter="20" type="flex" justify="center" align="middle">
      <el-col class="content">
        <LangSwitch />

        <el-form ref="form" class="login-form" :model="form" :rules="ruleForm" :status-icon="true">
          <h2>{{ $t("login.title") }}</h2>
          <br />

          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              v-focus
              clearable
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="form.password"
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
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let name = "注册";
import Cookies from "js-cookie";
import { regist } from "@/api/user";
import LangSwitch from "@/components/user/lang-switch";
export default {
  name: "Register",
  directives: {
    focus: {
      inserted(el) {
        el.querySelector("input").focus();
      },
    },
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
    LangSwitch,
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
            console.log(res);
            this.loading = false;
            if (res.success) {
              this.$router.push({ name: "login" });
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$min-width: 500px;
.login-container {
  width: 100%;
  height: 100%;
  @include flex;
  background: url("http://api.neweb.top/bing.php?type=rand") center center fixed no-repeat;
  background-size: cover;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
  }
  .content {
    position: relative;
    z-index: 12;
    width: 400px;
    height: 320px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;
    .login-form {
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 10px;
      @include flex;
      div {
        width: 100%;
        margin-top: 10px;
      }
    }
    .login-submit {
      width: 100%;
      height: 40px;
      margin-top: 20px;
    }
  }
}
</style>
