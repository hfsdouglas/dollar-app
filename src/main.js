import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css 

const app = createApp(App);

app.use(PrimeVue); 
app.component('primevue-inputtext', InputText);
app.component('primevue-button', Button);

app.mount('#app')
