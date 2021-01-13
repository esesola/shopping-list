require('./bootstrap');

import Vue from 'vue'

Vue.component('app', require('./vue/app'));

const app = new Vue({
    el: '#app',
    components: { App }
})
