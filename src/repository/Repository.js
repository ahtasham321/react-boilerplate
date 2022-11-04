import axios from 'axios';

const baseDomain = 'https://api.themoviedb.org';
const baseURL = `${baseDomain}`;

// const getToken = () => {
// 	let ls = JSON.parse(localStorage.getItem('authUser'));
// 	if (ls && ls.token != null) {
// 		return `Bearer ${ls.token}`;
// 	} else {
// 		return '';
// 	}
// };

let axiosObj;
axiosObj = axios.create({
	baseURL,
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE2NjVmMDZjLTE5NGMtNDE4MS05ZTAzLTQ2ZDRiMmYzOGEzOCIsImlhdCI6MTY2NTE0NDYzMCwiZXhwIjoxNjY1NzQ5NDMwfQ.57ZCxRwU3ZF-J-nQsONq9nvAZN8q-pdsvRMwRp6ip4M',
	},
});

export default axiosObj;
