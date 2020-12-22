const { notEmpty } = require("../utils.js");
module.exports = {
  description: "创建directives",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入directives名称,勿与之前重复,然后点击回车",
      validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const actions = [
      {
        type: "add",
        path: `src/directives/js/${name}.js`,
        templateFile: "plop-temp/directives/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
