const approuter = require("@sap/approuter");
const ar = approuter();

process.env.PORT = process.env.PORT || 3000;

ar.beforeRequestHandler.use(function myMiddleware(req, res, next) {
  res.setHeader("access-control-allow-origin", "*");
  next();
});

ar.start();
