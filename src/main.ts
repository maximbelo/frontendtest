import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

import "@/assets/setup.scss";
import "@/assets/typography.scss";
import "@/assets/global.scss";

app.use(createPinia());

app.mount("#app");
