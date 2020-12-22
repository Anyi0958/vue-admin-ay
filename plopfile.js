const viewGenerator = require("./plop-temp/view/prompt");
const curdGenerator = require("./plop-temp/curd/prompt");
const componentGenerator = require("./plop-temp/component/prompt");
const mockGenerator = require("./plop-temp/mock/prompt");
const vuexGenerator = require("./plop-temp/vuex/prompt");
const Vuedirectives = require("./plop-temp/directives/prompt");

module.exports = plop => {
  plop.setGenerator("view", viewGenerator);
  plop.setGenerator("curd", curdGenerator);
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("mock&api", mockGenerator);
  plop.setGenerator("vuex", vuexGenerator);
  plop.setGenerator("directive", Vuedirectives);
};
