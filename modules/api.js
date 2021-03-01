import axios from 'axios';


async function axList() {
	return axios.get(`${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api/list`);
}

export { axList }
