import axios from 'vue-axios'
import * as types from "../mutation-type"

export default {
	state: {
		WebData: {}
	},
	mutations: {
		[types.SET_DATA](state, payload) {
			state.WebData = payload
		}
	},
	actions: {
		axiosGet({dispatch, commit}) {
			return axios.get(process.env.XXX_URL).then(response => {
				commit({
					type: types.SET_DATA,
					info: response
				})
			}).catch(error => {
				console.log(error)
				return false
			})
		},

		axiosPost({dispatch, commit}, $rawData) {
			let formData = {
				Action: "send",
				Version: "1.0.0",
				Type: "",
				Data: $rawData
			}

			return axios.post(process.env.XXX_URL, formData).then(response => {
				commit({
					type: types.SET_DATA,
					info: response
				})
			}).catch(error => {
				console.log(error)
				return false
			})
		}
	}
}
