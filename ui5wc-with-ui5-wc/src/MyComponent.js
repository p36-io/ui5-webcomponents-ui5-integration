import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import ComponentLoader from "./util/ComponentLoader.js"

// Template
import MyComponentTemplate from "./generated/templates/MyComponentTemplate.lit.js";

import { COUNT } from "./generated/i18n/i18n-defaults.js";

/**
 * @public
 */
const metadata = {
	tag: "my-component",
	properties: /** @lends demo.MyComponent.prototype */ {
		/**
		 * Defines the count of the component.
		 * @type { sap.ui.webc.base.types.Integer }
		 * @defaultvalue 0
		 * @public
		 */
		count: {
			type: Integer,
			defaultValue: 0,
		},
	},
	slots: {
	},
	events: {
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>my-component</code> component is a demo component that displays some text.
 *
 * @constructor
 * @alias demo.MyComponent
 * @extends sap.ui.webc.base.UI5Element
 * @tagname my-component
 * @public
 */
class MyComponent extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return MyComponentTemplate;
	}

	static async onDefine() {
		MyComponent.i18nBundle = await getI18nBundle("ui5wc-with-ui5-wc");
	}

	onClick() {
		this.count++;
	}

	get counterText() {
		return MyComponent.i18nBundle.getText(COUNT);
	}

	get loadComponent() {
		ComponentLoader.load();
	}
}

MyComponent.define();

export default MyComponent;
