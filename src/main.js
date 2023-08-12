import './assets/main.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import { createApp } from 'vue'
import App from './App.vue'


library.add(faSearch);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");