// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
// import props from 'src/components/mixin/props'

Vue.config.productionTip = false
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDAlCEpGHl_ZOKLfaIzueU3-hjNXlJZyHc',
    authDomain: 'proyecto-de-barri-1.firebaseapp.com',
    databaseURL: 'https://proyecto-de-barri-1.firebaseio.com',
    projectId: 'proyecto-de-barri-1',
    storageBucket: 'proyecto-de-barri-1.appspot.com',
    messagingSenderId: '675677680317'
    };
  firebase.initializeApp(config)
  Vue.use(firebase)
  Vue.use(firestore)
   // Vue.mixin(props)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
