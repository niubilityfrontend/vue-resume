// vetur.config.js
import Vue from 'vue'
import store from './src/store'
import i18n from './src/i18n'

// Install FontAwesome

//you need to import the CSS manually (in case you want to override it)

/** @type {import('vls').VeturConfig} */
module.exports = {
  projects: [
    {
      root: './',
      // **optional** default: `[]`
      // Register globally Vue component glob.
      // If you set it, you can get completion by that components.
      // It is relative to root property.
      // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
      globalComponents: [
        new Vue({
          store,
          i18n,
        }),
      ],
    },
  ],
}
