const { notEmpty } = require("../utils.js");
module.exports = {
  description: "创建curd",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入view名称,勿与之前重复,然后点击回车",
      validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const properCaseName = "{{properCase name}}";
    const actions = [
      {
        type: "add",
        path: `src/views/project/${name}/index.vue`,
        templateFile: "plop-temp/curd/index.hbs",
        data: {
          name: name,
        },
      },
      {
        type: "add",
        path: `src/views/project/${name}/components/${properCaseName}Edit.vue`,
        templateFile: "plop-temp/curd/edit.hbs",
        data: {
          name: name,
        },
      },
      {
        type: "add",
        path: `mock/controller/${name}.js`,
        templateFile: "plop-temp/mock/index.hbs",
        data: {
          name: name,
        },
      },
      {
        type: "add",
        path: `src/api/${name}.js`,
        templateFile: "plop-temp/api/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
