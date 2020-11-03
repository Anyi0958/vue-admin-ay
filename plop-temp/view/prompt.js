const { notEmpty } = require("../utils.js");
module.exports = {
  description: "创建view",
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
    const actions = [
      {
        type: "add",
        path: `src/views/${name}/index.vue`,
        templateFile: "plop-temp/view/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
