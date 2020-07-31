import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#005d81',
                secondary: '#00c5e3',
                accent: '#8c9eff',
                error: '#b71c1c',
                anchor: '#00c5e3'
            }
        }
    }
});
