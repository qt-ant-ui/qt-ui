import type { App } from "vue";

import Button from "./src/button.vue";

Button.install = function (app: App) {
	app.component(Button.name, Button);
	return app;
};

export default Button;
