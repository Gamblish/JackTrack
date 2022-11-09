import axios from "axios"
import { API_URL } from "../http/api"


export const fetchData = async (controller: string, payload: any) => {
	axios.defaults.withCredentials = true


	return await axios.post(`${API_URL}${controller}`, payload, {


		headers: {
			withCredentials: true,
			'Content-Type': 'application/json'

		}
	}).then(response => {
		if (response.data.error != null) {
			throw response.data.error
		}
		return response




	})









}