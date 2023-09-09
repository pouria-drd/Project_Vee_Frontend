import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$baseUrl = "https://127.0.0.1:8000/";

app.use(router, axios);

app.mount("#app");
