const { notEmpty } = require("../utils.js");

module.exports = {
  description: "创建component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入component名称,勿与之前重复,然后点击回车",
      validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{properCase name}}";
    const actions = [
      {
        type: "add",
        path: `src/components/${name}/index.vue`,
        templateFile: "plop-temp/component/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
