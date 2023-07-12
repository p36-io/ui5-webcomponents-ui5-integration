import UI5Initializer from "./UI5Initializer";

let instance;

class Component {
  constructor() {}

  async load() {
    await UI5Initializer.initialize();
    sap.ui.require([], async () => {
      const component = await sap.ui.core.Component.create({
        name: "demo.app",
        url: sap.ui.require.toUrl("demo/app"),
      });

      //Create a new container since shadowdom won't work
      const tag = document.querySelector('#myFirstComponent')
      const container = document.createElement("div");
      tag.parentNode.insertBefore(container, tag);

      new sap.ui.core.ComponentContainer({
        component
      }).placeAt(container);
    });
  }
}

instance ??= new Component();
export default instance;
