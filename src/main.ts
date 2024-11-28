import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "@/assets/setup.scss";
import "@/assets/typography.scss";
import "@/assets/global.scss";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
