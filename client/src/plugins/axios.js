/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.headers.common.Accept = 'application/json'
// Axios.defaults.baseURL = 'http://192.168.1.50:3000'
Axios.defaults.baseURL = 'http://localhost:3000'

// Bind Axios to Vue.
Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return Axios
  }
})
