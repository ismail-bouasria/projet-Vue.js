import Homecomponent from "./components/Homecomponent.js";

const App = Vue.createApp({
    components:{
        'home-component': Homecomponent,
    }
})
App.mount('#app');
