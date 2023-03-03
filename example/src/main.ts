import "./style.css";

import QtUi from "@qt-ui/components";
import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.use(QtUi);

app.mount("#app");
