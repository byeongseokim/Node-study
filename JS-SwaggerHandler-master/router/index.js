const userAPI = require("../router/user");
const ApiDcos = require("../docs/index");

function getSwaggerOption() {
  const apiDocs = new ApiDcos();
  apiDocs.init();

  return apiDocs.getSwaggerOption();
}

/**
 *
 * @param {Express.Application} app
 */
module.exports = (app) => {
  // router가 먼저 실행하기 때문에 위에서 실행해도 됨
  const { swaggerUI, specs, setUpoption } = getSwaggerOption();

  app.use("/user", userAPI);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, setUpoption));
};
