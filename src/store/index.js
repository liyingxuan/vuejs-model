import Vue from 'vue'
import Vuex from 'vuex'

import AjaxGetData from './modules/ajax-get-data'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		AjaxGetData
	}
})
