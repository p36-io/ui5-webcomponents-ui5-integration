let instance;
class UI5Initializer {
    constructor() { }
    initialize() {
        return new Promise(function (resolve, reject) {
            let head = document.getElementsByTagName("head")[0];
            let script = document.createElement("script");
            script.addEventListener("load", function () { resolve(); });
            script.src = `https://sapui5.hana.ondemand.com/resources/sap-ui-core.js`;
            script.id = "sap-ui-bootstrap";
            script.setAttribute("data-sap-ui-compatVersion", "edge");
            script.setAttribute("data-sap-ui-resourceroots", '{ "demo.app" : "http://localhost:3000/ui" }');
            script.setAttribute("data-sap-ui-theme", "sap_fiori_3_dark");
            script.setAttribute("data-sap-ui-noConflict", "true");
            script.setAttribute("data-sap-ui-frameOptions", "trusted");
            head.appendChild(script);
        });
    }
}

instance ??= new UI5Initializer;
export default instance;