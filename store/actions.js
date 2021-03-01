import { axList } from "~/modules/api";


export default {
	async ACT_LIST({ commit }) {
		let { data } = await axList()
		commit('MUT_LIST', data);
	},
}
