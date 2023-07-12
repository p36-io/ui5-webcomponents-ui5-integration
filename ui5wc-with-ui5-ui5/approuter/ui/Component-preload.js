//@ui5-bundle demo/Component-preload.js
sap.ui.require.preload({
	"demo/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models"],function(t,e,i){"use strict";return t.extend("demo.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.call(this);this.setModel(i.createDeviceModel(),"device");this.getRouter().initialize()},getContentDensityClass:function(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.support.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}})});
},
	"demo/controller/App.controller.js":function(){
sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("demo.controller.App",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}})});
},
	"demo/controller/BaseController.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){"use strict";return e.extend("demo.controller.BaseController",{getOwnerComponent:function(){return e.prototype.getOwnerComponent.call(this)},getRouter:function(){return t.getRouterFor(this)},getResourceBundle:function(){var e=this.getOwnerComponent().getModel("i18n");return e.getResourceBundle()},getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){this.getView().setModel(e,t);return this},navTo:function(e,t,n){this.getRouter().navTo(e,t,undefined,n)},onNavBack:function(){var e=n.getInstance().getPreviousHash();if(e!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}})});
},
	"demo/controller/Main.controller.js":function(){
sap.ui.define(["./BaseController","sap/m/MessageBox"],function(e,o){"use strict";return e.extend("demo.controller.Main",{sayHello:function(){o.show("Hello World!")}})});
},
	"demo/i18n/i18n.properties":'appTitle=demo\nappDescription=UI5 Application demo\nbtnText=Say Hello\n',
	"demo/i18n/i18n_de.properties":'appTitle=demo\nappDescription=UI5 Application demo\nbtnText=Sag Hallo\n',
	"demo/i18n/i18n_en.properties":'appTitle=demo\nappDescription=UI5 Application demo\nbtnText=Say Hello\n',
	"demo/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"demo","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"demo.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.115.1","libs":{"sap.ui.core":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"demo.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"demo.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"}],"targets":{"main":{"viewId":"main","viewName":"Main"}}}}}',
	"demo/model/formatter.js":function(){
sap.ui.define(function(){"use strict";return{formatValue:function(e){return e&&e.toUpperCase()}}});
},
	"demo/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/model/BindingMode","sap/ui/Device"],function(e,i,n){"use strict";return{createDeviceModel:function(){var u=new e(n);u.setDefaultBindingMode(i.OneWay);return u}}});
},
	"demo/view/App.view.xml":'<mvc:View\n\tcontrollerName="demo.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>\n',
	"demo/view/Main.view.xml":'<mvc:View\n\tcontrollerName="demo.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:core="sap.ui.core"\n\tcore:require="{\n\t\tformatter: \'demo/model/formatter\'\n\t}"><MessagePage\n\t\ttitle="{i18n>appTitle}"\n\t\ttext="{i18n>appTitle}"\n\t\ticon="sap-icon://accept"\n\t\tid="page"\n\t\tdescription="{i18n>appDescription}"><buttons><Button\n\t\t\t\tid="helloButton"\n\t\t\t\ttext="{formatter: \'formatter.formatValue\', path: \'i18n>btnText\'}"\n\t\t\t\tpress="sayHello" /></buttons></MessagePage></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
